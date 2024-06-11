import { AppBar, CssBaseline, IconButton,  Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import AccountMenu from './menu'



const drawerWidth = 240

interface ModalProps {
    handleDrawerToggle : () => void
}

const Header = ({handleDrawerToggle}:ModalProps) => {


    return (
        <>
        <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    bgcolor: '#fff',
                }}
            >
                <Toolbar>
                   
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <div
                        className='flex justify-between items-center w-full'
                    >
                        <Typography variant="h6" noWrap component="div">
                            
                        </Typography>
                        <AccountMenu/>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header
