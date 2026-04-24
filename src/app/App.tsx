import { useState } from "react";
import { MonthCard } from "./components/MonthCard";
import { MediaModal } from "./components/MediaModal";
import { motion } from "motion/react";

interface MediaItem {
  type: "photo" | "video";
  url: string;
  caption: string;
}

interface MonthData {
  month: string;
  year: number;
  media: MediaItem[];
  special?: {
    type: "birthday" | "halloween" | "first-love" | "girlfriend" | "trip";
    title: string;
    description: string;
  };
}

export default function App() {
  const [selectedMonth, setSelectedMonth] = useState<MonthData | null>(null);

  const months: MonthData[] = [
    {
      month: "Abril",
      year: 2025,
      media: [
        {
          type: "video",
          url: "/data/abril25/video1.mp4",
          caption:
            "Mi primer freud conociendo a la bandidota (amor de mi vida). Ese día me regalaron una postal para que cayera, y caí ;c",
        },
        {
          type: "photo",
          url: "/data/abril25/foto1.jpeg",
          caption:
            "Esta foto fue infraganti muajajaj, aqui estabamos tomandono el pesimo vino que compramos",
        },
      ],
    },
    {
      month: "Mayo",
      year: 2025,
      media: [
        {
          type: "video",
          url: "/data/mayo25/video1.mp4",
          caption:
            "Mi vidita linda llevandome a conocer el chorro de quevedo (esa fotito la dibuje)",
        },
        {
          type: "photo",
          url: "/data/mayo25/foto1.jpeg",
          caption:
            "Y rematamos en una nueva universida publica. Amé techitos, amé fumar contigo, te amé a ti y todo ese día",
        },
        {
          type: "photo",
          url: "/data/mayo25/foto2.jpeg",
          caption:
            "De nuestras primeras citas (y el fondo de pantalla de mi amor muajajja)) fui feli en mi septimazo y en arrunchis improvisado en el techo del planetario",
        },
        {
          type: "video",
          url: "/data/mayo25/video2.mp4",
          caption:
            "Y nuestro videito viendo la luna (gracias planetario nocturno por: ). Te regalo la luna todas las veces que quieras mi amor",
        },
      ],
    },
    {
      month: "Junio",
      year: 2025,
      media: [
        {
          type: "video",
          url: "/data/junio25/video1.mp4",
          caption: "Jugando mini golf con mi amor (me humillaron)",
        },
        {
          type: "photo",
          url: "/data/junio25/foto1.jpeg",
          caption:
            "Este mes me trajeron girasoles muajajaja (gei). Fui la parcerita mas feli del mundo",
        },
      ],
    },
    {
      month: "Julio",
      year: 2025,
      media: [
        {
          type: "video",
          url: "/data/julio25/video1.mp4",
          caption:
            "Laura intentando acariciar un pato (acariciarias un cocodrilo si no mordiera) y siendo atacada por patos",
        },
        {
          type: "photo",
          url: "/data/julio25/foto1.jpeg",
          caption: "YA VISTE MIS DIBUJITOOOOS???",
        },
        {
          type: "photo",
          url: "/data/julio25/foto2.jpeg",
          caption:
            "yo y laura, laura y yo dejandonos manipular por un gatito rompe(une)hogares. Algún dia adoptaremos un ajonjoli",
        },
        {
          type: "video",
          url: "/data/julio25/video2.mp4",
          caption:
            "Olvidemos la funa, mira el gatito tan increible robando monedaaaas :0",
        },
      ],
    },
    {
      month: "Agosto",
      year: 2025,
      media: [
        {
          type: "photo",
          url: "/data/agosto25/foto1.jpeg",
          caption:
            "Mi amor gonito me pompro milhoja de villa de leyva (deliciosa) y un señor random me funo por no regalarle un bonsai",
        },
        {
          type: "photo",
          url: "/data/agosto25/foto2.jpeg",
          caption:
            "No recuerdo si ese era el bonsai en cuestión o fue otro dia (tenemos pocas fotos de agosto) (me odiabas)",
        },
      ],
    },
    {
      month: "Septiembre",
      year: 2025,
      media: [
        {
          type: "photo",
          url: "/data/septiembre25/foto1.jpeg",
          caption:
            "Pumpe de mi mujer, me secuestraron por jugar a ser rappi (en esa foto te ves tan gonita)",
        },
        {
          type: "video",
          url: "/data/septiembre25/video1.mp4",
          caption:
            "Cantandole el pumpe feli a mi mujer con tortitas y un gran total de TRES (3) botellas de niche JAJAJAJ",
        },
        {
          type: "video",
          url: "/data/septiembre25/video2.mp4",
          caption:
            "El video que mas repito en mi celular, en mi cabeza y en todo puto lado, probablemente vi mi historia 78 veces (mi mujer no pq la robaron JAJAJAJ) (te amo) (te ves muy linda)",
        },
        {
          type: "photo",
          url: "/data/septiembre25/foto2.jpeg",
          caption:
            "literalmente la mejor carrera de mi vida, disfrute la lluvia, disfrute mis besitos mojados y nos dejaron libres las atracciones",
        },
      ],
      special: {
        type: "birthday",
        title: "Tu pumpeeeee 🎂",
        description: "estando juntas :)",
      },
    },
    {
      month: "Octubre",
      year: 2025,
      media: [
        {
          type: "photo",
          url: "/data/octubre25/foto1.jpeg",
          caption:
            "Citita gei de octubre, yo solo dije que queria y mi amor gonita me organizo toda la cita, cronograma y recorrido (resuelve) (solo pa mi)",
        },

        {
          type: "video",
          url: "/data/octubre25/video1.mp4",
          caption: "Mi mujer gonita bordandoooo",
        },

        {
          type: "photo",
          url: "/data/octubre25/foto2.jpeg",
          caption:
            "Ese dia conoci a mi hija biologica (no pregunten por el color de piel) y fuimos felices en nuestra jornada madres-hija",
        },
        {
          type: "photo",
          url: "/data/octubre25/foto3.jpeg",
          caption:
            "Halloween con mi amoooor (amamos a sam) (kiaris tambien la ama) 🎃",
        },
      ],
      special: {
        type: "halloween",
        title: "Halloween",
        description: "estando juntitas",
      },
    },
    {
      month: "Noviembre",
      year: 2025,
      media: [
        { type: "video", url: "/data/noviembre25/video1.mp4", caption: "" },
        { type: "photo", url: "/data/noviembre25/foto1.jpeg", caption: "" },
      ],
    },
    {
      month: "Diciembre",
      year: 2025,
      media: [
        {
          type: "photo",
          url: "/data/diciembre25/foto1.jpeg",
          caption:
            "yo (mujer del gorrito) con mi mujer (mujer de la gorrita) siendo besuqueada en techos despues de darle el regalo navideño a mi esposa (evidencia en mi carita) (nadie se imagina la cosa TAN linda que me dio ella de navida)",
        },

        {
          type: "video",
          url: "/data/diciembre25/video1.mp4",
          caption:
            "Lau amor, literalmente opacaste al atardecer, ¿como te vas a ver tan lindaAA?",
        },
        {
          type: "photo",
          url: "/data/diciembre25/foto2.jpeg",
          caption:
            "Puedes creer que yoo??? osea yoo, la parcera más afortunada del mundo pude estar un 25 de diciembre con mi amor lindo??? y que me amaron mucho ese dia???",
        },

        {
          type: "video",
          url: "/data/diciembre25/video2.mp4",
          caption:
            "Aqui juicioas armando juntas (quiza yo) a nuestro hijo Emilo Lego Taborda Herrera",
        },
      ],
    },
    {
      month: "Enero",
      year: 2026,
      media: [
        {
          type: "photo",
          url: "/data/enero26/foto1.jpeg",
          caption:
            "Cita gei al jardin botanico, mi amor preciosa como siempre. Comimos rico, recorrimos todito y fui requete feli (nos mojamos un poquis)",
        },
        {
          type: "video",
          url: "/data/enero26/video1.mp4",
          caption:
            "Vean al amor de mi vida siendo gei y captada en camara (lo voy a subir a yutub)",
        },
        {
          type: "photo",
          url: "/data/enero26/foto3.jpeg",
          caption:
            "Nuestro primer te amo, borrachas en el parque de la 85 asi rebozando re descarado de amor (me libere) (te amo mucho) (me costo no confesar antes)",
        },
        {
          type: "photo",
          url: "/data/enero26/foto2.jpeg",
          caption:
            "Mi mujer llenandome de besos en un oxxo (siempre me llena de besitos)",
        },
      ],
      special: {
        type: "first-love",
        title: 'Primer "Te Amo"',
        description: "top confesiones al amor de mi vida",
      },
    },
    {
      month: "Febrero",
      year: 2026,
      media: [
        {
          type: "photo",
          url: "/data/febrero26/foto1.jpeg",
          caption:
            "Nos hicimos noviaaaas, taba nerviosa, cansona y hormonal. Pero sorpresivamente me dijeron que si (Fui muy feli ese día) 💕",
        },
        {
          type: "photo",
          url: "/data/febrero26/foto2.jpeg",
          caption:
            "migao especial con mi amor (y un librito que casi no decifra)",
        },
      ],
      special: {
        type: "girlfriend",
        title: "7 de Febrero",
        description: "por fiiin",
      },
    },
    {
      month: "Marzo",
      year: 2026,
      media: [
        {
          type: "video",
          url: "/data/marzo26/video1.mp4",
          caption:
            "Mi mujer y mis hijas porque somos una familia tradicional cristiana (las amo mucho) (me hacen requete feli) (lo mejor de mi vidita)",
        },
        {
          type: "photo",
          url: "/data/marzo26/foto1.jpeg",
          caption:
            "yo y lau, lau y yo. Como podemos observar lau tiene los ojitos llenos de bandidaje (me haces desbordar de amor mi vidita)",
        },
        {
          type: "photo",
          url: "/data/marzo26/foto2.jpeg",
          caption:
            "YOOO con mi esposa, mujer, madre de mis hijos (que ademas se ve divina con sus ojitos cerraos) en guatavitaaaaa",
        },

        {
          type: "photo",
          url: "/data/marzo26/foto3.jpeg",
          caption:
            "Tomas bonitas con un atardecer gonito, mi mujer gonita (más que el tontico del atardecer) y yo con mi corazoncito llenito",
        },
      ],
      special: {
        type: "trip",
        title: "Primer Viaje",
        description: "literalmente el dia y noche mas feliz de mi vida",
      },
    },
    {
      month: "Abril",
      year: 2026,
      media: [
        {
          type: "video",
          url: "/data/abril26/video1.mp4",
          caption:
            "mi mujer me llevo a jugar bolooos (esta puta porque perdio), a saunaa y a turcoo. ¿y ustedes? comiendo mrda imagino",
        },
        {
          type: "photo",
          url: "/data/abril26/foto1.jpeg",
          caption:
            "mi mujer linda y yo, recien saliditas del turco (no le pregunten a saritah como se sintio al ver a laura mojada)",
        },

        {
          type: "video",
          url: "/data/abril26/video2.mp4",
          caption: "esqueleto bailarin de nuestra cita de museos con mi amooor",
        },
        {
          type: "photo",
          url: "/data/abril26/foto2.jpeg",
          caption: "Una citita mas, cada vez más cerquita de un año juntas 💕",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-100 via-purple-100 to-indigo-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-20 w-32 h-32 bg-pink-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-300 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-purple-300 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative text-center py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            className="text-6xl md:text-7xl mb-3 font-bold text-black"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            a year of us
          </h1>
          <p
            className="text-purple-700/70 text-lg tracking-wide"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            24 Abril 2025 — 24 Abril 2026
          </p>
        </motion.div>
      </div>

      {/* Calendar Grid */}
      <div className="relative max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {months.map((monthData, index) => (
            <MonthCard
              key={`${monthData.month}-${monthData.year}`}
              {...monthData}
              index={index}
              onClick={() => setSelectedMonth(monthData)}
            />
          ))}
        </div>
      </div>

      {/* Media Modal */}
      {selectedMonth && (
        <MediaModal
          month={selectedMonth}
          onClose={() => setSelectedMonth(null)}
        />
      )}
    </div>
  );
}
