import adoptee1 from "../images/adoptee1.png";
import adoptee2 from "../images/adoptee2.png";
import adoptee3 from "../images/adoptee3.png";
import adoptee4 from "../images/adoptee4.png";
import adoptee5 from "../images/adoptee5.png";
import adoptee6 from "../images/adoptee6.png";
import adoptee7 from "../images/adoptee7.png";
import adoptee8 from "../images/adoptee8.png";
import adoptee9 from "../images/adoptee9.png";
import adoptee10 from "../images/adoptee10.png";

export default function Cards() {
  return (
    <div
      className=" container-fluid text-center pb-4 m-0"
      style={{
        backgroundColor: "rgba(86, 217, 245, 0.4)",
        borderTop: "1px #56d9f5 solid",
      }}
    >
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 mt-4">
        {" "}
        <div
          className="card align-items-center  pt-2 "
          style={{
            backgroundColor: "rgba(0,0,0, 0)",
            border: "3px #56d9f5 solid ",
          }}
        >
          <img
            src={adoptee1}
            className="card-img-top img-fluid border rounded"
            alt="Adoptee1"
            style={{
              height: "100%",
              objectFit: "cover",
              border: "2px #56d9f5 solid",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">Maverick</h5>
            <p
              className="card-text"
              style={{
                width: "16rem",
                height: "9rem",
              }}
            >
              Male, puppy.
              <br />
              <br />
              Favourite activities include cuddling, eating, playing outside,
              playing with his toys.
            </p>
            <a
              href="https://savinghope.co.nz/dogs/maverick/"
              className="btn btn-info"
            >
              Take Me Home!
            </a>
          </div>
        </div>
        <div
          className="card align-items-center  pt-2 "
          style={{
            backgroundColor: "rgba(0,0,0, 0)",
            border: "3px #56d9f5 solid ",
          }}
        >
          <img
            src={adoptee2}
            className="card-img-top img-fluid border rounded"
            style={{
              height: "100%",
              objectFit: "cover",
              border: "2px #56d9f5 solid",
            }}
            alt="Adoptee2"
          />
          <div className="card-body">
            <h5 className="card-title">Emmie Jay</h5>
            <p
              className="card-text"
              style={{
                width: "16rem",
                height: "9rem",
              }}
            >
              Female, puppy.
              <br />
              <br />I love to be kept busy and spend time exploring, playing and
              learning new things.
            </p>
            <a
              href="https://savinghope.co.nz/dogs/emmie-jay/"
              className="btn btn-info"
            >
              Take Me Home!
            </a>
          </div>
        </div>
        <div
          className="card align-items-center  pt-2 "
          style={{
            backgroundColor: "rgba(0,0,0, 0)",
            border: "3px #56d9f5 solid ",
          }}
        >
          <img
            src={adoptee3}
            className="card-img-top object-fit-fill border rounded"
            alt="Adoptee1"
            style={{
              height: "100%",
              objectFit: "cover",
              border: "2px #56d9f5 solid",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">Ace</h5>
            <p
              className="card-text"
              style={{
                width: "16rem",
                height: "9rem",
              }}
            >
              Male, puppy.
              <br />
              <br />
              Enjoys a good snuggle on the bed.
            </p>
            <a
              href="https://savinghope.co.nz/dogs/ace-3/"
              className="btn btn-info"
            >
              Take Me Home!
            </a>
          </div>
        </div>
        <div
          className="card align-items-center  pt-2 "
          style={{
            backgroundColor: "rgba(0,0,0, 0)",
            border: "3px #56d9f5 solid ",
          }}
        >
          <img
            src={adoptee4}
            className="card-img-top object-fit-fill border rounded"
            alt="Adoptee1"
            style={{
              height: "100%",
              objectFit: "cover",
              border: "2px #56d9f5 solid",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">Flame</h5>
            <p
              className="card-text"
              style={{
                width: "16rem",
                height: "9rem",
              }}
            >
              Male, puppy.
              <br />
              <br />
              Flame is a very happy and playful puppy.
            </p>
            <a
              href="https://savinghope.co.nz/dogs/flame/"
              className="btn btn-info"
            >
              Take Me Home!
            </a>
          </div>
        </div>
        <div
          className="card align-items-center  pt-2 "
          style={{
            backgroundColor: "rgba(0,0,0, 0)",
            border: "3px #56d9f5 solid ",
          }}
        >
          {" "}
          <img
            src={adoptee5}
            className="card-img-top object-fit-fill border rounded"
            alt="Adoptee1"
            style={{
              height: "100%",
              objectFit: "cover",
              border: "2px #56d9f5 solid",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">Ashlee</h5>
            <p
              className="card-text"
              style={{
                width: "16rem",
                height: "9rem",
              }}
            >
              Female, puppy.
              <br />
              <br />
              Very happy to snuggle next to you on the couch.
            </p>
            <a
              href="https://savinghope.co.nz/dogs/ashlee/"
              className="btn btn-info"
            >
              Take Me Home!
            </a>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 mt-4">
        {" "}
        <div
          className="card align-items-center  pt-2 "
          style={{
            backgroundColor: "rgba(86, 217, 245, 0.0)",
            border: "3px #56d9f5 solid ",
          }}
        >
          {" "}
          <img
            src={adoptee6}
            className="card-img-top object-fit-fill border rounded"
            alt="Adoptee1"
            style={{
              height: "100%",
              objectFit: "cover",
              border: "2px #56d9f5 solid",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">Griffin</h5>
            <p
              className="card-text"
              style={{
                width: "16rem",
                height: "9rem",
              }}
            >
              Male, puppy.
              <br />
              <br />
              He loves the company of people and a good snuggle, but he is also
              content in finding his own space to curl up in.
            </p>
            <a
              href="https://savinghope.co.nz/dogs/griffin/"
              className="btn btn-info"
            >
              Take Me Home!
            </a>
          </div>
        </div>
        <div
          className="card align-items-center  pt-2 "
          style={{
            backgroundColor: "rgba(0,0,0, 0)",
            border: "3px #56d9f5 solid ",
          }}
        >
          {" "}
          <img
            src={adoptee7}
            className="card-img-top object-fit-fill border rounded"
            alt="Adoptee1"
            style={{
              height: "100%",
              objectFit: "cover",
              border: "2px #56d9f5 solid",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">Daisy</h5>
            <p
              className="card-text"
              style={{
                width: "16rem",
                height: "9rem",
              }}
            >
              Female, puppy.
              <br />
              <br />
              She loves nothing more than to cuddle up on your knee on the sofa.
            </p>
            <a
              href="https://savinghope.co.nz/dogs/daisy-3/"
              className="btn btn-info"
            >
              Take Me Home!
            </a>
          </div>
        </div>
        <div
          className="card align-items-center  pt-2 "
          style={{
            backgroundColor: "rgba(0,0,0, 0)",
            border: "3px #56d9f5 solid ",
          }}
        >
          {" "}
          <img
            src={adoptee8}
            className="card-img-top object-fit-fill border rounded"
            alt="Adoptee1"
            style={{
              height: "100%",
              objectFit: "cover",
              border: "2px #56d9f5 solid",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">Rocky</h5>
            <p
              className="card-text"
              style={{
                width: "16rem",
                height: "9rem",
              }}
            >
              Male, puppy.
              <br />
              <br />
              He knows basic commands but is very smart and willing to learn
              loads more.
            </p>
            <a
              href="https://savinghope.co.nz/dogs/rocky-4/"
              className="btn btn-info"
            >
              Take Me Home!
            </a>
          </div>
        </div>
        <div
          className="card align-items-center  pt-2 "
          style={{
            backgroundColor: "rgba(0,0,0, 0)",
            border: "3px #56d9f5 solid ",
          }}
        >
          <img
            src={adoptee9}
            className="card-img-top object-fit-fill border rounded"
            alt="Adoptee1"
            style={{
              height: "100%",
              objectFit: "cover",
              border: "2px #56d9f5 solid",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">Cooper</h5>
            <p
              className="card-text"
              style={{
                width: "16rem",
                height: "9rem",
              }}
            >
              Male, puppy.
              <br />
              <br />
              Copper is a people puppy, the more the merrier.
            </p>
            <a
              href="https://savinghope.co.nz/dogs/cooper-2/"
              className="btn btn-info"
            >
              Take Me Home!
            </a>
          </div>
        </div>
        <div
          className="card align-items-center  pt-2 "
          style={{
            backgroundColor: "rgba(0,0,0, 0)",
            border: "3px #56d9f5 solid ",
          }}
        >
          <img
            src={adoptee10}
            className="card-img-top object-fit-fill border rounded"
            alt="Adoptee1"
            style={{
              height: "100%",
              objectFit: "cover",
              border: "2px #56d9f5 solid",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">Roko</h5>
            <p
              className="card-text"
              style={{
                width: "16rem",
                height: "9rem",
              }}
            >
              Male, adult.
              <br />
              <br />I very much love curling up next to you on the couch while
              you work, watch the footy or Netflix.
            </p>
            <a
              href="https://savinghope.co.nz/dogs/roko/"
              className="btn btn-info"
            >
              Take Me Home!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
