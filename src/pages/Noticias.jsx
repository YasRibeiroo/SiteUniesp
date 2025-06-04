import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Noticias = () => {
  const [noticias, setNoticias] = useState([])
  const urlBase = "http://localhost:3000"

  useEffect(() => {
    axios.get(`${urlBase}/noticias`)
      .then(response => setNoticias(response.data))
      .catch(error => console.error("Erro ao carregar a lista de noticias: ", error))
  }, [])

  return (
    <Container className="py-4">
      <h2 className="mb-4">Noticias</h2>

      <Row className="g-4">
        {noticias.map(noticia => (
          <Col md={4} key={noticia.id}>
            <Card className="text-center h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{noticia.titulo}</Card.Title>
                <Card.Text>{noticia.texto}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Noticias
