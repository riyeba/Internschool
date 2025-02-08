import { Carousel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardy() {
  return (
    <div className="d-flex flex-column flex-lg-row p-0 relative">
      {/* Card Section */}
      <Card
        className="w-100 w-lg-50"
        style={{
          height: "50rem",
          padding: "2rem",
          backgroundImage: "url('https://images.unsplash.com/photo-1738762388662-dc8387c816ba?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: '0',
        }}
      >
        <Card.Body style={{ marginTop: "10rem" }}>
          <Card.Text className="fs-4 text-warning">
            Welcome To Bill Gates Institute of Computer Science and Management, Osmanabad.
          </Card.Text>
          <Card.Text>
            <h1
              style={{
                fontSize: "2rem",
                color: "white",
                fontWeight: "bold",
              }}
              className="fw-bold"
            >
              We Provide High Quality
              <span
                style={{
                  textDecoration: 'underline',
                  textDecorationThickness: '6px',
                  textDecorationColor: '#FF6A13',
                  textUnderlinePosition: 'under',
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                Education
              </span>
              In Computer Science
            </h1>
          </Card.Text>
          <Card.Text>
            <p style={{ color: "white", fontSize: "1rem" }}>
              The Scientific Research long back established that, ‘universe is expanding’ which holds true even today.
              And now we say ‘world is shrinking’ - this also is True! The introduction of a global network of the
              internet has turned the whole globe into a village. The only thing that is emerging fast in the current
              era is the applications of computers and management skills in society.
            </p>
          </Card.Text>
          <Button
            className="p-3 mt-4 bg-warning"
            style={{
              borderRadius: '0',
              border: "0",
              width: "14rem",
              height: "5rem",
              backgroundColor: "#FF6A13",
            }}
          >
            <span className="fs-5 fw-semibold">Get Started</span>
          </Button>
        </Card.Body>
      </Card>

      {/* Carousel Section */}
      <section
        className="w-100 w-lg-50"
        style={{
          height: "50rem",
          overflow: "hidden",
          position: "relative",
          right: "2px",
        }}
      >
        <Carousel
          indicators={false}
          controls={false}
          interval={3000}
          className="carousel-right-to-left"
          dir="rtl" // Reversed direction
        >
          <Carousel.Item>
            <div
              style={{
                width: "100%",
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1729038880769-80c51e4c509a?q=80&w=2144&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="event"
                style={{
                  width: "100%",
                  height: "70rem",
                  objectFit: "",
                }}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                width: "100%",
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="event"
                style={{
                  width: "100%",
                  height: "70rem",
                  objectFit: "cover",
                }}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                width: "100%",
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1697729447666-c39f50d595ea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="event"
                style={{
                  width: "100%",
                  height: "70rem",
                  objectFit: "cover",
                }}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div
              style={{
                width: "100%",
                backgroundColor: "#fff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1495995424756-6a5a3f9e7543?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="event"
                style={{
                  width: "100%",
                  height: "70rem",
                  objectFit: "cover",
                }}
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
    </div>
  );
}

export default Cardy;
