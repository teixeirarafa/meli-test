import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

const Home: React.FC = () => {
  const searchQuery = "";
  const navigate = useNavigate();

  function onSearchSubmit(query: string) {
    navigate(`/items?search=${query}`);
  }
  return <Header onSearchSubmit={onSearchSubmit} searchText={searchQuery} />;
};

export default Home;
