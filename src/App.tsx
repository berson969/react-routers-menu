import "./css/index.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Menu from "./components/Menu"
import HomePage from "./components/HomePage";
import DriftPage from "./components/DriftPage";
import TimeAttackPage from "./components/TimeAttackPage";
import ForzaPage from "./components/ForzaPage";

export default function App() {
  return (
	  <div>
		  <BrowserRouter>
			  <Routes>
				<Route path="/" element={<Menu />}>
					<Route index element={<HomePage />} />
					<Route path="/drift" element={<DriftPage />} />
					<Route path="/timeattack" element={<TimeAttackPage />} />
					<Route path="/forza" element={<ForzaPage />} />
				</Route>
			  </Routes>
		  </BrowserRouter>
	  </div>
  );
}
