import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth"
import {auth, db, storage} from "../firebase";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import {ref, deleteObject} from "firebase/storage"
import Navigation from "../components/navigation";

export default function PostPageDetails() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const params = useParams();
  const id = params.id;
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  async function deletePost(id) {
    const postDocument = await getDoc(doc(db, "posts", id));
    const post = postDocument.data();
    await deleteDoc(doc(db, "posts", id));

    // Try to get the images/x.jpeg file path out of the full path
    const url = new URL(post.image);
    const pathParts = url.pathname.split("/");
    let refPath = pathParts[pathParts.length - 1];
    refPath = decodeURIComponent(refPath);
    console.log(refPath);

    const imageReference = ref(storage, refPath);
    await deleteObject(imageReference);

    navigate("/");
  }


  async function getPost(id) {
    const postDocument = await getDoc(doc(db, "posts", id));
    const post = postDocument.data();
    setCaption(post.caption);
    setImage(post.image);
  }

  useEffect(() => {
    if (loading) return
    if (!user) navigate("/login");
    getPost(id);
  }, [id, navigate, user, loading]);

  return (
    <>
      <Navigation />
      <Container>
        <Row style={{ marginTop: "2rem" }}>
          <Col md="6">
            <Image src={image} style={{ width: "100%" }} />
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Text>{caption}</Card.Text>
                <Card.Link href={`/update/${id}`}>Edit</Card.Link>
                <Card.Link
                  onClick={() => deletePost(id)}
                  style={{ cursor: "pointer" }}
                >
                  Delete
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
