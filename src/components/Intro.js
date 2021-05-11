/** @jsx jsx */
import { jsx, Themed, Label, Grid, Box } from "theme-ui"
import React, { useState } from "react"
import { Link } from "gatsby"

import secondOrder from "../cortazarOrder.json"

export default function Intro() {
  const [order, setOrder] = useState(null)
  const chapters = [...Array(155).keys()].map(x => ++x)
  const parts = 5
  let columns = []
  for (let i = parts; i > 0; i--) {
    columns.push(chapters.splice(0, Math.ceil(chapters.length / i)))
  }
  return (
    <div>
      <div
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Themed.h3 sx={{ my: 0 }}>Julio Cortazar</Themed.h3>
        <Themed.h1 sx={{ mt: 0, mb: 7 }}>Rayuela</Themed.h1>
      </div>

      <Themed.h3 sx={{ textAlign: "center" }}>TABLERO DE DIRECCIÓN</Themed.h3>
      <Themed.p>
        A su manera este libro es muchos libros, pero sobre todo es dos libros.
      </Themed.p>
      <Label>
        {/* <div sx={{ display: "flex", alignItems: "center", mr: 2 }}>
          <Radio name="book" />
        </div> */}
        <Themed.p
          sx={{ bg: order ? "secondary" : "background" }}
          onClick={() => setOrder(true)}
        >
          El primero se deja leer en la forma corriente, y termina en el
          capítulo{" "}
          <Themed.a as={Link} to="/capitulo/56">
            56
          </Themed.a>
          , al pie del cual hay tres vistosas estrellitas que equivalen a la
          palabra Fin. Por consiguiente, el lector prescindirá sin
          remordimientos de lo que sigue.
        </Themed.p>
      </Label>
      <Label>
        {/* <div sx={{ display: "flex", alignItems: "center", mr: 2 }}>
          <Radio name="book" />
        </div> */}
        <Themed.p
          sx={{ bg: order === false ? "secondary" : "background" }}
          onClick={() => setOrder(false)}
        >
          El segundo se deja leer empezando por el capítulo{" "}
          <Themed.a as={Link} to="/capitulo/73">
            73
          </Themed.a>{" "}
          y siguiendo luego en el orden que se indica al pie de cada capítulo.{" "}
          {/* <del> */}
          En caso de confusión u olvido, bastará consultar la lista siguiente:
          {/* </del> */}
        </Themed.p>
      </Label>

      <Themed.p>
        {secondOrder.map((num, idx) => (
          <React.Fragment key={idx}>
            <Themed.a
              as={Link}
              to={`/capitulo/${num}`}
              sx={{ textAlign: "center" }}
            >
              {num}
            </Themed.a>{" "}
            {num === secondOrder[secondOrder.length - 1] ? "" : "-"}{" "}
          </React.Fragment>
        ))}
      </Themed.p>

      <Themed.p>
        Con el objeto de facilitar la rápida ubicación de los capítulos, la
        numeración se va repitiendo en lo alto de las páginas correspondientes a
        cada uno de ellos.
      </Themed.p>

      <Grid columns={5} sx={{ my: 8 }}>
        {columns.map(x => (
          <Box key={x} sx={{ display: "flex", flexDirection: "column" }}>
            {x.map(z => (
              <Themed.p key={z} sx={{ textAlign: "center", my: 0 }}>
                <Themed.a
                  as={Link}
                  to={`/capitulo/${z}`}
                  sx={{ textAlign: "center" }}
                >
                  {z}
                </Themed.a>
              </Themed.p>
            ))}
          </Box>
        ))}
      </Grid>

      <div
        sx={{
          maxWidth: "80%",
          my: 8,
          mx: "auto",
        }}
      >
        <Themed.p sx={{ fontSize: 1 }}>
          Y animado de la esperanza de ser particularmente útil a la juventud, y
          de contribuir a la reforma de las costumbres en general, he formado la
          presente colección de máximas, consejos y preceptos, que son la base
          de aquella moral universal, que es tan proporcionada a la felicidad
          espiritual y temporal de todos los hombres de cualquiera edad, estado
          y condición que sean, y a la prosperidad y buen orden, no sólo de la
          república civil y cristiana en que vivimos, sino de cualquiera otra
          república o gobierno que los filósofos más especulativos y profundos
          del orbe quieran discurrir.
        </Themed.p>

        <Themed.p
          sx={{
            fontSize: 1,
            fontStyle: "oblique",
            textAlign: "right",
            maxWidth: "80%",
            ml: "auto",
          }}
        >
          Espíritu de la Biblia y Moral Universal, sacada del Antiguo y Nuevo
          Testamento. Escrita en toscano por el abad Martini con las citas al
          pie: Traducida en castellano Por un Clérigo Reglar de la Congregación
          de San Cayetano de esta Corte. Con licencia. Madrid: Por Aznar, 1797.
        </Themed.p>
      </div>

      <div
        sx={{
          maxWidth: "80%",
          my: 8,
          mx: "auto",
        }}
      >
        <Themed.p
          sx={{
            fontSize: 1,
          }}
        >
          Siempre que biene el tiempo fresco, o sea al medio del otonio, a mí me
          da la loca de pensar ideas de tipo eséntrico y esótico, como ser por
          egenplo que me gustaría venirme golondrina para agarrar y volar a los
          paíx adonde haiga calor, o de ser hormiga para meterme bien adentro de
          una cueva y comer los productos guardados en el verano o de ser una
          bívora como las del solójico, que las tienen bien guardadas en una
          jaula de vidrio con calefación para que no se queden duras de frío,
          que es lo que les pasa a los pobres seres humanos que no pueden
          comprarse ropa con lo cara questá, ni pueden calentarse por la falta
          del querosén, la falta del carbón, la falta de lenia, la falta de
          petrolio y tamién la falta de plata, porque cuando uno anda con biyuya
          ensima puede entrar a cualquier boliche y mandarse una buena grapa que
          hay que ver lo que calienta, aunque no conbiene abusar, porque del
          abuso entra el visio y del visio la dejeneradés tanto del cuerpo como
          de las taras moral de cada cual, y cuando se viene abajo por la
          pendiente fatal de la falta de buena condupta en todo sentido, ya
          nadie ni nadies lo salva de acabar en el más espantoso tacho de basura
          del desprastijio humano, y nunca le van a dar una mano para sacarlo de
          adentro del fango enmundo entre el cual se rebuelca, ni más ni meno
          que si fuera un cóndor que cuando joven supo correr y volar por la
          punta de las altas montanias, pero que al ser viejo cayó parabajo como
          bombardero en picada que le falia el motor moral. ¡Y ojalá que lo que
          estoy escribiendolé sirbalguno para que mire bien su comportamiento y
          que no searrepienta cuando es tarde y ya todo se haiga ido al corno
          por culpa suya!
        </Themed.p>
        <Themed.p
          sx={{ fontSize: 1, textAlign: "right", maxWidth: "80%", ml: "auto" }}
        >
          <strong>CÉSAR BRUTO</strong>,{" "}
          <span style={{ fontStyle: "oblique" }}>
            Lo que me gustaría ser a mí si no fuera lo que soy (capítulo: Perro
            de San Bernardo)
          </span>
          .
        </Themed.p>
      </div>

      <div
        sx={{
          maxWidth: "80%",
          my: 8,
          mx: "auto",
        }}
      >
        <Themed.h4 sx={{ textAlign: "center" }}>DEL LADO DE ALLLA</Themed.h4>
        <Themed.p sx={{ fontSize: 1 }}>
          Rien ne vous tue un homme comme d’être obligé de représenter un pays.
        </Themed.p>
        <Themed.p sx={{ fontSize: 1, textAlign: "center" }}>
          <strong>JACQUES VACHÉ</strong>,{" "}
          <span sx={{ fontStyle: "oblique" }}>carta a André Breton</span>.
        </Themed.p>
      </div>
    </div>
  )
}
