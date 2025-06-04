import React from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'

const Faculdade = () => {
  return (
    <Container className="py-4">
      <h2 className="mb-4">A FACULDADE</h2>

      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <p>
            A Faculdade UNIESP é uma instituição comprometida com a excelência no ensino e no desenvolvimento de habilidades para o mercado de trabalho...
          </p>
          <p>
            Nossos cursos são projetados para formar profissionais capacitados e conscientes de seu papel na sociedade...
          </p>
        </Card.Body>
      </Card>

      <Row className="g-4">
        <Col md={4}>
          {/* Card1 */}
          <Card className="text-center h-100 shadow-sm">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
              alt="Library"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>Vida no campus</Card.Title>
              <Card.Text>
                A UNIESP oferece um ambiente acolhedor e dinâmico, promovendo a integração entre alunos, professores e a comunidade.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card2 */}
        <Col md={4}>
          <Card className="text-center h-100 shadow-sm">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
              alt="Biblioteca"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>Biblioteca</Card.Title>
              <Card.Text>
                A biblioteca da UNIESP possui um vasto acervo físico e digital, oferecendo suporte essencial para o desenvolvimento acadêmico.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card3 */}
        <Col md={4}>
          <Card className="text-center h-100 shadow-sm">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
              alt="Prédio principal"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>Prédio principal</Card.Title>
              <Card.Text>
                A estrutura moderna do prédio principal oferece salas de aula bem equipadas, laboratórios e espaços de convivência.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Faculdade
