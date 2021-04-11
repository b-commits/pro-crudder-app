import { css } from '@emotion/react';

const navPrimaryColor = '#292929';

export const navList = css({
    paddingTop: '70px',
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    paddingBottom: '55px',
});

export const crudLogo = css({
    height: '80px',
    marginTop: '-38px',
    
})

export const navMain = css({
    width: '80%',
    marginLeft: '10%',
    backgroundColor: navPrimaryColor,
    border: '1px solid gray',
    fontSize: 'x-large',
    fontFamily: 'Roboto'
})

// export const navLink = css ({
//     textDecoration: 'none',
//     color: 'white',
// })

// export const activeNavLink = css ({
//     textDecoration: 'none',
//     color: '#bb86fc',
//   }
// )
  