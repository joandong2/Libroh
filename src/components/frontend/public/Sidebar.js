import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Label } from "semantic-ui-react";
import { getCategories } from "../../../redux/actions/books";

const Sidebar = () => {
    const notifications = useSelector((state) => state.notifications);
    const categories = useSelector((state) => state.books.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <Grid.Column className="sidebar" width={3} align="left">
            <Label.Group>
                {categories &&
                    categories.categories.map((category, index) => {
                        return (
                            <Label
                                as="a"
                                key={index}
                                href={`/category/${category.slug}`}
                            >
                                {category.name}
                                <Label.Detail>
                                    {category.books ? category.books : 0}
                                </Label.Detail>
                            </Label>
                        );
                    })}
            </Label.Group>
        </Grid.Column>
    );
};

export default Sidebar;
