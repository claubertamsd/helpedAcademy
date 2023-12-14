import { Avatar, Divider, Drawer, Link, List, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import { Box } from '@mui/system';
import { ReactNode, useEffect } from 'react';
import { useDrawerContext } from '../contexts/DrawerContext';
import { Home, Newspaper, Contacts, LocalLibrary,Info } from '@mui/icons-material';

interface IListItemLinkProps {
  to: string;
  icon: string;
  label: string;
  onClick: (() => void) | undefined;
}
const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick }) => {
  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);
  const match = useMatch({ path: resolvedPath.pathname, end: false });


  const handleClick = () => {
    navigate(to);
    onClick?.();
  };

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
      {iconComponents[icon]}
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};
interface AppThemeProviderProps {
    children: ReactNode;
  }

  const iconComponents: Record<string, React.ReactNode> = {
    'home': <Home />,
    'news': <Newspaper />,
    'library':<LocalLibrary/>,
    'contacts': <Contacts/>,
    'about': <Info/>
    // Adicione mais ícones conforme necessário
  };

export const DrawerSide: React.FC<AppThemeProviderProps> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, drawerOptions, toggleDrawerOpen,setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    
    const options = [
      {
        icon: 'home',
        path: "/",
        label: "Página inicial",
      },

      {
        icon: 'library',
        path: "/subjects",
        label: "Disciplinas",
      },

      
      {
        icon: 'news',
        path: "/news",
        label: "Novidades",
      },

      
      {
        icon: 'contacts',
        path: "/contacts",
        label: "Contatos",
      },

      {
        icon: 'about',
        path: "/subjects",
        label: "Sobre",
      },
      // Adicione mais opções conforme necessário
    ];

    // Chame a função setDrawerOptions para atualizar as opções do drawer
    setDrawerOptions(options);
  }, []);

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'temporary'} onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">

          <Box width="100%" height={theme.spacing(10)} display="flex" alignItems="center" justifyContent="center">
            <Link href='/' display="flex " alignItems="center" underline='none' color={'#000000'}>
            <Avatar          
              sx={{ height: theme.spacing(6), width: theme.spacing(6) }}
              src="/src/assets/logo.png"
            />
            <Typography fontWeight={700} sx={{marginLeft:'10px', fontFamily:'Archivo'}}>Helped Academy</Typography>
            </Link>
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              {drawerOptions.map(drawerOption => (
                <ListItemLink
                  to={drawerOption.path}
                  key={drawerOption.path}
                  icon={drawerOption.icon}
                  label={drawerOption.label}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>

        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(0)}>
        {children}
      </Box>
    </>
  );
};


