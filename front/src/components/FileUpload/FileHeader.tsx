/** @jsxImportSource @emotion/react */
import { Grid, Button } from '@material-ui/core';
import { trashText } from './FileUpload-style';

import DeleteIcon from '@material-ui/icons/Delete';

export interface FileHeaderProps {
  file: File;
  onDelete: (file: File) => void;
}

export function FileHeader({ file, onDelete }: FileHeaderProps) {
  return (
    <Grid container>
      <Grid item>
        <Button size="small" onClick={() => onDelete(file)}>
          <DeleteIcon color="primary" />
          <p css={trashText}>{file.name}</p>
        </Button>
      </Grid>
    </Grid>
  );
}
