import Index1 from "./pages/Index1/Index1";
import Index2 from "./pages/Index2/Index2";
import Index3 from "./pages/Index3/Index3";
import Index4 from "./pages/Index4/Index4";
import Index5 from "./pages/Index5/Index5";
import Index6 from "./pages/Index6/Index6";
import Index7 from "./pages/Index7/Index7";
import Index8 from "./pages/Index8/Index8";
import Index9 from "./pages/Index9/Index9";
import Index10 from "./pages/Index10/Index10";
import Index11 from "./pages/Index11/Index11";
import Index12 from "./pages/Index12/Index12";
import Index13 from "./pages/Index13/Index13";
import Leader from "./pages/Leader/Leader";

const routes = [
  { path: "/index13", component: Index13 },
  { path: "/index12", component: Index12 },
  { path: "/index11", component: Index11 },
  { path: "/index10", component: Index10 },
  { path: "/index9", component: Index9 },
  { path: "/index8", component: Index8 },
  { path: "/index7", component: Index7 },
  { path: "/index6", component: Index6 },
  { path: "/index5", component: Index5 },
  { path: "/index4", component: Index4 },
  { path: "/index3", component: Index3 },
  { path: "/index2", component: Index2 },
  { path: "/flappy", component: Leader },
  { path: "/", component: Index12 },
];

export default routes;
