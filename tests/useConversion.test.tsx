import { renderHook, act } from "@testing-library/react-native";

import { useConvertor } from "@/hooks/useConvertor";
import { Alert } from "react-native";

// Simulamos `Alert.alert` para evitar que bloquee los tests
jest.spyOn(Alert, "alert").mockImplementation(() => {});

describe("useConvertor Hook", () => {
  test("Valores iniciales son correctos", () => {
    const { result } = renderHook(() => useConvertor());

    expect(result.current.selectedCurrencyFrom).toBe("USD");
    expect(result.current.selectedCurrencyTo).toBe("EUR");
    expect(result.current.amount).toBe("");
    expect(result.current.convertedAmount).toBe("");
    expect(result.current.modalFromVisible).toBe(false);
    expect(result.current.modalToVisible).toBe(false);
  });

  test("handleSelectFrom cambia la moneda de origen", () => {
    const { result } = renderHook(() => useConvertor());

    act(() => {
      result.current.handleSelectFrom("HNL");
    });

    expect(result.current.selectedCurrencyFrom).toBe("HNL");
    expect(result.current.modalFromVisible).toBe(false);
  });

  test("handleSelectTo cambia la moneda de destino", () => {
    const { result } = renderHook(() => useConvertor());

    act(() => {
      result.current.handleSelectTo("USD");
    });

    expect(result.current.selectedCurrencyTo).toBe("USD");
    expect(result.current.modalToVisible).toBe(false);
  });

  test("handleConvert calcula correctamente la conversión", () => {
    const { result } = renderHook(() => useConvertor());

    act(() => {
      result.current.setAmount("100");
      result.current.handleSelectFrom("USD");
      result.current.handleSelectTo("EUR");
    });
  
    // Ejecutar la conversión
    act(() => {
      result.current.handleConvert();
    });
  
  });

  test("handleConvert muestra alerta si el monto no es válido", () => {
    const { result } = renderHook(() => useConvertor());

    act(() => {
      result.current.setAmount(""); // No se ingresa un valor
      result.current.handleConvert();
    });

    expect(Alert.alert).toHaveBeenCalledWith("Error", "Por favor, ingrese un monto válido.");
  });
});
