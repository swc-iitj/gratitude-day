import React, { useState } from "react";
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemText,
    makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(() => ({
    link: {
        textDecoration: "none",
        color: "blue",
        fontSize: "20px",
    },
    icon: {
        color: "white"
    }
}));

function DrawerComponent() {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/" className={classes.link}>
                            <h1 style={{ color: "#3f51b5", fontSize: "1.2em" }}>Home</h1>
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/createPostCard" className={classes.link}>
                            <h1 style={{ color: "#3f51b5", fontSize: "1.2em" }}>Write a Postcard</h1>
                            </Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemText>
                            <Link to="/memorywall" className={classes.link}>
                            <h1 style={{ color: "#3f51b5", fontSize: "1.2em" }}>Memory Wall</h1>
                            </Link>
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <IconButton style={{marginLeft: "auto"}} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon className={classes.icon}/>
            </IconButton>
        </>
    );
}
export default DrawerComponent;
