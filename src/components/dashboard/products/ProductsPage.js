import { Link } from "react-router-dom";
import Heading from "../../layout/Heading";
import DashboardPage from "../DashboardPage";
import ProductList from "../products/ProductList";

export default function ProductPage() {
  return (
    <DashboardPage>
      <Heading size="3" content="Products" />
      <ProductList />
    </DashboardPage>
  );
}
