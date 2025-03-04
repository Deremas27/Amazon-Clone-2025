import { useContext, useEffect } from "react";
import "./App.css";
// import Landing from "./pages/Landing/Landing";
import Router from "./Router";
import { DataContext } from "./components/DataProvider/DataProvider";
import { auth } from "./Utility/firebase";
import { Type } from "./Utility/action.type";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {}, []);
auth.onAuthStateChanged((authUser)=> {
if(authUser){
  console.log(authUser);
  dispatch({
    type: Type.SET_USER,
    user: authUser
  })
}else{
   dispatch({
     type: Type.SET_USER,
     user: null,
   });
}
})
  return (
    <>
      <Router />
    </>
  );
}

export default App;
