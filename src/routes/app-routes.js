import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthRoute, PublicRoute } from "./route"


export default function AppRoutes() {
  return (
      <Router>
          <Routes>
              {
                  PublicRoute.map( ( PublicRoute, index ) =>
                  {
                      return (
                          <Route
                              exact={PublicRoute.exact}
                              key={index}
                              path={PublicRoute.path}
                              element={PublicRoute.component}
                          />
                      )
                  })
              }
              {
                  AuthRoute.map( ( AuthRoute, index ) =>
                  {
                      return (
                          <Route
                          exact={AuthRoute.exact}
                          key={index}
                          path={AuthRoute.path}
                          element={AuthRoute.component}
                          />
                      )
                  })
              }
        </Routes>
    </Router>
  )
}
