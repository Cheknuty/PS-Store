import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { AppContnet, AppWrapper } from "./App.style";
import { SiteTitle } from "./atoms/siteTitle/siteTitle.comp";
import { Wrapper } from "./atoms/wrapper/wrapper.comp";
import { fetchComingSoonGames } from "./molecules/comingSoonSection/comingSoonSectionSlice";
import { Footer } from "./molecules/footer/footer.comp";
import { Header } from "./molecules/header/header.comp";
import { HiddenMenu } from "./molecules/hiddenMenu/hiddenMenu.comp";
import { fetchNewReleaseGames } from "./molecules/newReleasesList/newReleasesSlice";
import { TopLine } from "./molecules/topLine/topLine.comp";
import { fetchTredingGames } from "./molecules/trendingList/trendingListSlice";
import { CartPage } from "./pages/cartPage/cartPage.comp";
import { fetchAllGames } from "./pages/explore/exploreSlice";
import { Game } from "./pages/game/game.comp";
import { Home } from "./pages/home/home.comp";
function App() {
  const content = useRef()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTredingGames())
    dispatch(fetchNewReleaseGames())
    dispatch(fetchComingSoonGames())
    dispatch(fetchAllGames())
    // eslint-disable-next-line
  },[])
  const clicker = () => {
    content.current.closest("#root").querySelector("div").childNodes[0].classList.remove("active--menu")
    content.current.closest("#root").querySelector("div").childNodes[1].classList.remove("active--content")
  }
  return (
    <Wrapper>
      <HiddenMenu />
      <AppContnet ref={content}>
        <SiteTitle />
        <TopLine />
        <Header />
        <AppWrapper onClick={clicker}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game/:id" element={<Game />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </AppWrapper>
        <Footer />
      </AppContnet>
    </Wrapper>
  );
}

export default App;
