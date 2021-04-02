import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  Table,
  Menu,
  Icon,
  List,
  Rating,
  Button
} from "semantic-ui-react";
import Header from "./Header";
import { getBooks } from "../../../redux/actions/books";

const Books = props => {
  //const { register, handleSubmit, errors } = useForm();
  const notifications = useSelector(state => state.notifications);
  const books = useSelector(state => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  console.log("books", books);

  return (
    <div className="wrapper">
      <Header />

      <Grid padded className="title-box">
        <Grid container>
          <h3 className="page-title">
            Books{" "}
            <Button compact as="Link" href="/admin/add-book">
              Add Book
            </Button>
          </h3>
        </Grid>
      </Grid>

      <Grid padded className="dashboard-boxes">
        <Grid container>
          <Grid.Row columns={2}>
            <Grid.Column align="left" width={16}>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>ISBN</Table.HeaderCell>
                    <Table.HeaderCell>Rating</Table.HeaderCell>
                    <Table.HeaderCell>Title</Table.HeaderCell>
                    <Table.HeaderCell>Total Pages</Table.HeaderCell>
                    <Table.HeaderCell>Author</Table.HeaderCell>
                    <Table.HeaderCell>Publisher</Table.HeaderCell>
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {books.books &&
                    books.books.map(book => {
                      return (
                        <>
                          <Table.Row>
                            <Table.Cell>{book.isbn}</Table.Cell>
                            <Table.Cell>
                              <Rating
                                defaultRating={parseFloat(book.ratings).toFixed(
                                  0
                                )}
                                maxRating={5}
                                disabled
                              />
                            </Table.Cell>
                            <Table.Cell>{book.title}</Table.Cell>
                            <Table.Cell>{book.total_pages}</Table.Cell>
                            <Table.Cell>{book.author_name}</Table.Cell>
                            <Table.Cell>{book.publisher_name}</Table.Cell>
                            <Table.Cell>
                              <List horizontal link>
                                href={`/admin/book/${book.id}/edit`}
                                <List.Item as="a">
                                  <Icon name="edit" />
                                </List.Item>
                                <List.Item
                                  as="a"
                                  href={`/admin/book/${book.id}/delete`}
                                >
                                  <Icon name="delete" />
                                </List.Item>
                              </List>
                            </Table.Cell>
                          </Table.Row>
                        </>
                      );
                    })}
                </Table.Body>

                <Table.Footer>
                  <Table.Row>
                    <Table.HeaderCell colSpan="7">
                      <Menu floated="right" pagination>
                        <Menu.Item as="a" icon>
                          <Icon name="chevron left" />
                        </Menu.Item>
                        <Menu.Item as="a">1</Menu.Item>
                        <Menu.Item as="a">2</Menu.Item>
                        <Menu.Item as="a">3</Menu.Item>
                        <Menu.Item as="a">4</Menu.Item>
                        <Menu.Item as="a" icon>
                          <Icon name="chevron right" />
                        </Menu.Item>
                      </Menu>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              </Table>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid>
    </div>
  );
};

export default Books;
