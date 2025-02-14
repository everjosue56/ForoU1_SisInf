import { useState } from "react";
import { Alert } from "react-native";

const currencyList = ["USD", "EUR", "HNL"]; // Monedas disponibles

// 🔹 Tasas de conversión simuladas (valores ficticios)
const exchangeRates: Record<string, Record<string, number>> = {
  USD: { EUR: 0.91, HNL: 24.50, USD: 1 },
  EUR: { USD: 1.10, HNL: 26.90, EUR: 1 },
  HNL: { USD: 0.041, EUR: 0.037, HNL: 1 },
};

export const useConvertor = () => {
  const [selectedCurrencyFrom, setSelectedCurrencyFrom] = useState("USD");
  const [selectedCurrencyTo, setSelectedCurrencyTo] = useState("EUR");
  const [amount, setAmount] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [modalFromVisible, setModalFromVisible] = useState(false);
  const [modalToVisible, setModalToVisible] = useState(false);

  const handleSelectFrom = (currency: string) => {
    setSelectedCurrencyFrom(currency);
    setModalFromVisible(false);
  };

  const handleSelectTo = (currency: string) => {
    setSelectedCurrencyTo(currency);
    setModalToVisible(false);
  };

  const handleConvert = () => {
    if (!amount || isNaN(Number(amount))) {
      Alert.alert("Error", "Por favor, ingrese un monto válido.");
      return;
    }

    const rate = exchangeRates[selectedCurrencyFrom][selectedCurrencyTo];
    const result = (parseFloat(amount) * rate).toFixed(2);

    setConvertedAmount(result);
  };

  return {
    currencyList,
    selectedCurrencyFrom,
    selectedCurrencyTo,
    amount,
    convertedAmount,
    modalFromVisible,
    modalToVisible,
    setAmount,
    setModalFromVisible,
    setModalToVisible,
    handleSelectFrom,
    handleSelectTo,
    handleConvert,
  };
};