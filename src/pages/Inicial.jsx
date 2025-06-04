import React from 'react'
import { Card, Col, Row, Container } from 'react-bootstrap'
import BannerAd from '../components/BannerAd'

const Inicial = () => {
  return (
    <Container className="py-4">
      <BannerAd />
      <Card className="mb-4 shadow-sm">
        <Card.Body>
          <p>
            A Faculdade UNIESP é uma instituição comprometida em fornecer educação de qualidade, com foco no desenvolvimento profissional e pessoal...
          </p>
          <p>
            Contamos com uma equipe de professores qualificados, uma infraestrutura moderna e uma metodologia de ensino que valoriza o aprendizado prático...
          </p>
          <p>
            A seguir, conheça mais sobre as áreas e as oportunidades que a Faculdade UNIESP oferece para você.
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
              src="https://images.unsplash.com/photo-1581090700227-1e8e7f3d0386"
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

      <Row className="g-4 mt-4">
        {/* Card1 Inferior */}
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body className='text-center'>
              <Card.Title>Parceria com Empresas</Card.Title>
              <Card.Text>
                A UNIESP mantém parcerias com diversas empresas, permitindo que nossos alunos tenham acesso a oportunidades de estágio e emprego logo após a graduação...
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card2 Inferior */}
        <Col md={6}>
          <Card className="h-100 shadow-sm">
            <Card.Body className='text-center'>
              <Card.Title>Compromisso com a educação</Card.Title>
              <Card.Text>
                A UNIESP se dedica a oferecer uma educação acessível e de qualidade, acreditando que o conhecimento transforma vidas...
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Inicial
