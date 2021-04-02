import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Dropdown, Menu, Icon, MenuItem } from "semantic-ui-react";

// import Header from "../public/Header";
// import Footer from "../public/Footer";

const TopMenu = (props) => {
    //const { register, handleSubmit, errors } = useForm();
    //const notifications = useSelector((state) => state.notifications);
    //const dispatch = useDispatch();
    //const onSubmit = (data) => dispatch(userLogin(data));

    return (
        <>
            <Menu compact>
                <Menu.Item href='/admin/dashboard'>
                    <Icon name="home" /> Home
                </Menu.Item>
                <Dropdown simple item 
                trigger={<><Icon name="book" /> Books</>} 
                options={[
                    {
                        key: "show-books",
                        text: "Show All Books",
                        icon: "pause",
                        as: Link,
                        to: "/admin/books",
                    },
                    {
                        key: "add-book",
                        text: "Add Book",
                        icon: "book",
                        as: Link,
                        to: "/admin/add-book",
                    },
                    
                ]}/>
                <Dropdown simple item 
                trigger={<><Icon name="user" /> User</>} 
                options={[
                    {
                        key: "show-users",
                        text: "Show All Users",
                        icon: "user circle",
                        as: Link,
                        to: "/admin/users",
                    },
                    {
                        key: "add-user",
                        text: "Add User",
                        icon: "user",
                        as: Link,
                        to: "/admin/add-user",
                    },
                    
                ]}/>
                <Dropdown simple item 
                trigger={<><Icon name="align justify" /> Settings</>} 
                options={[
                    {
                        key: "general",
                        text: "General",
                        icon: "cog",
                        as: Link,
                        to: "/admin/general-setting",
                    },
                ]}/>
            </Menu>
        </>
    );
};

export default TopMenu;