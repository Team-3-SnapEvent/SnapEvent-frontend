import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Header } from "../stories/Header/Header";
import { Button } from "../stories/Button/Button";
import ItemList, { ItemListForInterPark, Product, InterPark } from "../stories/ItemList/ItemList";
import { useRecoilValue } from "recoil";
import { ediya, interPark, oliveYoung, ssf } from "../recoil/atoms";

// const VITE_API_URL_OLIVEYOUNG = "https://snapevent.site/api/crawl/olive-young";
// const VITE_API_URL_INTERPARK = "https://snapevent.site/api/crawl/interpark";
// const VITE_API_URL_SSF = "https://snapevent.site/api/crawl/ssf-shop";
// const VITE_API_URL_EDIYA = "https://snapevent.site/api/crawl/ediya-coffee";

const OnBoarding = () => {
  const navigate = useNavigate();
  const oliveYoungItem = useRecoilValue<Product[]>(oliveYoung);
  const interParkItem = useRecoilValue<InterPark[]>(interPark);
  const SSFItem= useRecoilValue<Product[]>(ssf);
  const ediyaItem = useRecoilValue<Product[]>(ediya);

  // useEffect(() => {
  //   (async () => {
  //     const responseOliveYoung = await fetch(VITE_API_URL_OLIVEYOUNG);
  //     const responseInterPark = await fetch(VITE_API_URL_INTERPARK);
  //     const responseSSF = await fetch(VITE_API_URL_SSF);
  //     const responseEdiya = await fetch(VITE_API_URL_EDIYA);

  //     if (!responseOliveYoung.ok) {
  //       throw new Error("API 호출 실패" + responseOliveYoung.statusText);
  //     }
  //     if (!responseInterPark.ok) {
  //       throw new Error("API 호출 실패" + responseInterPark.statusText);
  //     }
  //     if (!responseSSF.ok) {
  //       throw new Error("API 호출 실패" + responseSSF.statusText);
  //     }
  //     if (!responseEdiya.ok) {
  //       throw new Error("API 호출 실패" + responseEdiya.statusText);
  //     }
  //     const jsonResponseOliveYoung = await responseOliveYoung.json();
  //     setOliveYoungItem(jsonResponseOliveYoung);
  //     setIsLoadingOliveYoung(false);

  //     const jsonResponseInterPark = await responseInterPark.json();
  //     setInterParkItem(jsonResponseInterPark);
  //     setIsLoadingInterPark(false);

  //     const jsonResponseSSF = await responseSSF.json();
  //     setSSFItem(jsonResponseSSF);
  //     setIsLoadingSSF(false);

  //     const jsonResponseEdiya = await responseEdiya.json();
  //     setEdiyaItem(jsonResponseEdiya);
  //     setIsLoadingEdiya(false);
  //   })();
  // }, []);

  return (
    <Container>
      <Header
        onLogin={() => {
          navigate("/login");
        }}
      />
      <Content>
        <Title>구독할 이벤트를 골라 주세요!</Title>
        <Items>
          <Category> 💄 화장품 💄 </Category>
          <CheckBoxContainer>
            <CheckBox type="checkbox" id="subscribe-cosmetics" name="subscribe-cosmetics" />
            <Label htmlFor="subscribe-cosmetics">Oliveyoung 구독하기</Label>
          </CheckBoxContainer>
          <ItemWrapper>
            {
              oliveYoungItem.map((it) => <ItemList key={it.title} {...it} />)
            }
          </ItemWrapper>
          <Category> 🎬 공연/티켓 🎤 </Category>
          <CheckBoxContainer>
            <CheckBox type="checkbox" id="subscribe-cosmetics" name="subscribe-cosmetics" />
            <Label htmlFor="subscribe-cosmetics">Interpark 구독하기</Label>
          </CheckBoxContainer>
          <ItemWrapper>
            {
              interParkItem.map((it) => <ItemListForInterPark key={it.title} {...it} />)
            }
          </ItemWrapper>
          <Category> 🧵 의류 🧶 </Category>
          <CheckBoxContainer>
            <CheckBox type="checkbox" id="subscribe-cosmetics" name="subscribe-cosmetics" />
            <Label htmlFor="subscribe-cosmetics">SSF 구독하기</Label>
          </CheckBoxContainer>
          <ItemWrapper>
            {SSFItem.map((it) => <ItemList {...it} />)}
          </ItemWrapper>
          <Category> ☕ 카페 🍰 </Category>
          <CheckBoxContainer>
            <CheckBox type="checkbox" id="subscribe-cosmetics" name="subscribe-cosmetics" />
            <Label htmlFor="subscribe-cosmetics">Ediya 구독하기</Label>
          </CheckBoxContainer>
          <ItemWrapper>
            {
              ediyaItem.map((it) => <ItemList key={it.title} {...it} />)
            }
          </ItemWrapper>
        </Items>
        <ButtonWrapper>
          <Button primary={true} size="large" label="구독하기" />
        </ButtonWrapper>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 3rem;
`;

const Content = styled.div`
  margin-top: 3rem;
`;

const Title = styled.h1`
  color: #333;
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  margin-top: 2rem;
`;
const Category = styled.h2`
  color: #333;
  font-size: 2rem;
  font-weight: bolder;
  text-align: start;
`;
const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow-x: scroll;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 1rem 1rem 1rem;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.3rem;
`;

const CheckBox = styled.input`
  margin-right: 0.5rem;
  zoom: 2;
`;

const Label = styled.label`
  font-size: 1.3rem;
`;

export default OnBoarding;
