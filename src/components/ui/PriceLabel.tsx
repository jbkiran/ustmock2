type SupportedCurrency = "gbp" | "usd" | "inr";

type PriceLabelProps = {
  currencyType: SupportedCurrency;
  price: number;
};

const currencySymbol: Record<SupportedCurrency, string> = {
  gbp: "GBP",
  usd: "USD",
  inr: "INR",
};
const PriceLabel = ({ currencyType, price }: PriceLabelProps) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencySymbol[currencyType],
    minimumFractionDigits: 2,
  });
  return (
    <>
      <span className="text-lg font-bold text-blue-600">
        {formatter.format(price)}
      </span>
    </>
  );
};

export default PriceLabel;
