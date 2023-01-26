import { Routes, BrowserRouter, Route } from "react-router-dom";

// Pages a serem usadas no sistema
import Home from "../pages/Home/index";
import Login from "../pages/User/Login/index";
import { NotFound } from "../pages/NotFound/index";
import { CreateUser } from "../pages/User/Create/index";
import { ProtectedLayout } from "../components/ProtectedLayout/index";
import { CreateAnnotation } from "../pages/Annotation/Create/index";
import { EditAnnotation } from "../pages/Annotation/Edit/index";
import { ListAnnotations } from "../pages/Annotation/List/index";
import { EditUser } from "../pages/User/Edit/index";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota User */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<CreateUser />} />
        <Route path="/" element={<ProtectedLayout />}>
          {/* Rota Home */}
          <Route path="/" element={<Home />} />
          {/* Rotas de usuário */}
          <Route path={"/user/new"} element={<CreateUser />} />
          <Route path={"/user/update"} element={<EditUser />} />
          {/* Rotas de anotações */}
          <Route path={"/annotation/new"} element={<CreateAnnotation />} />
          <Route path={"/annotation/update/:id"} element={<EditAnnotation />} />
          <Route path={"/annotations"} element={<ListAnnotations />} />
        </Route>

        {/* Rotas inexistentes */}
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
// <BrowserRouter>
//   <Fragment>
//     <Routes>
//       <Route path="/" element={<ProtectedLayout />}>
//         <Route path="/profile" element={<Profile />} />
//       </Route>
//       <Route path="/login" element={<Login />} />
//     </Routes>
//   </Fragment>
// </BrowserRouter>
