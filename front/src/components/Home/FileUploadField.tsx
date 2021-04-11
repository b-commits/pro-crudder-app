import { useField } from 'formik';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { FileError, FileRejection, useDropzone } from 'react-dropzone';
import { SingleFileUploadWithProgress } from '../Home/SingleFileUploadWithProgress';

export interface UploadableFile {
  file: File;
  errors: FileError[];
  url?: string;
}

export function FileUploadField({ name }: { name: string }) {
  const [inputProps, metaProps, helpers] = useField(name);
  const [files, setFiles] = useState<UploadableFile[]>([]);

  const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
    const mappedAcc = accFiles.map((file) => ({ file, errors: [] }));
    setFiles((curr) => [...curr, ...mappedAcc, ...rejFiles]);
  }, []);

  useEffect(() => {
    helpers.setValue(files);
  }, [files]);

  function onDelete(file: File) {
    setFiles((curr) => curr.filter((fw) => fw.file !== file));
  }

  function onUpload(file: File, url: string) {
    setFiles((curr) =>
      curr.map((fw) => {
        if (fw.file === file) {
          return { ...fw, url };
        }
        return fw;
      })
    );
  }

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <React.Fragment>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drop your image here.</p>
      </div>
      {files.map((fileWrapper, idx) => (
        <SingleFileUploadWithProgress
          onDelete={onDelete}
          onUpload={onUpload}
          key={idx}
          file={fileWrapper.file}
        />
      ))}
    </React.Fragment>
  );
}
