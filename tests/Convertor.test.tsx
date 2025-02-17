import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import Convertor from "@/components/Convertor";
import { useConvertor } from "@/hooks/useConvertor";

// Mockeamos el hook para controlar su estado en los tests
jest.mock("@/hooks/useConvertor");

describe("Convertor Component", () => {
  let mockHook: ReturnType<typeof useConvertor>;

  beforeEach(() => {
    mockHook = {
      currencyList: ["USD", "EUR", "HNL"],
      selectedCurrencyFrom: "USD",
      selectedCurrencyTo: "EUR",
      amount: "",
      convertedAmount: "",
      modalFromVisible: true,
      modalToVisible: false,
      setAmount: jest.fn(),
      setModalFromVisible: jest.fn(),
      setModalToVisible: jest.fn(),
      handleSelectFrom: jest.fn(),
      handleSelectTo: jest.fn(),
      handleConvert: jest.fn(),
    };

    (useConvertor as jest.Mock).mockReturnValue(mockHook);
  });

  test("Renderiza correctamente los elementos principales", () => {
    const { getByText, getByPlaceholderText } = render(<Convertor />);

    expect(getByText("Selecciona tu moneda")).toBeTruthy();
    expect(getByText("Convertir a")).toBeTruthy();
    expect(getByText("Ingrese el monto")).toBeTruthy();
    expect(getByPlaceholderText("Ingrese monto")).toBeTruthy();
    expect(getByText("Convertir")).toBeTruthy();
  });

  test("Muestra y cierra el modal de selección de moneda base", () => {
    const { getByText, queryByText } = render(<Convertor />);

    fireEvent.press(getByText("USD"));
    expect(mockHook.setModalFromVisible).toHaveBeenCalledWith(true);

    mockHook.modalFromVisible = true;
    (useConvertor as jest.Mock).mockReturnValue(mockHook);
    
    expect(queryByText("Selecciona una moneda")).toBeTruthy();
    fireEvent.press(getByText("Cerrar"));
    expect(mockHook.setModalFromVisible).toHaveBeenCalledWith(false);
  });

  test("Muestra y cierra el modal de selección de moneda destino", () => {
    const { getByText, queryByText } = render(<Convertor />);

    fireEvent.press(getByText("EUR"));
    expect(mockHook.setModalToVisible).toHaveBeenCalledWith(true);

    mockHook.modalToVisible = true;
    (useConvertor as jest.Mock).mockReturnValue(mockHook);

    expect(queryByText("Selecciona una moneda")).toBeTruthy();
    fireEvent.press(getByText("Cerrar"));
    expect(mockHook.setModalToVisible).toHaveBeenCalledWith(false);
  });

  test("Cambia el valor del input de monto", () => {
    const { getByPlaceholderText } = render(<Convertor />);
    const input = getByPlaceholderText("Ingrese monto");

    fireEvent.changeText(input, "100");
    expect(mockHook.setAmount).toHaveBeenCalledWith("100");
  });

  test("Ejecuta la conversión cuando se presiona el botón", () => {
    const { getByText } = render(<Convertor />);

    fireEvent.press(getByText("Convertir"));
    expect(mockHook.handleConvert).toHaveBeenCalled();
  });

  test("Muestra el resultado de la conversión correctamente", async () => {
    mockHook.convertedAmount = "91.00";
    (useConvertor as jest.Mock).mockReturnValue(mockHook);

    const { getByText } = render(<Convertor />);
    await waitFor(() => {
      expect(getByText("La total de la conversion de USD a EUR es de: 91.00")).toBeTruthy();
    });
  });
});
