import { View, Text, Modal, TouchableOpacity, FlatList, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import { globalStyles } from "@/styles/global-styles";
import { useConvertor } from "@/hooks/useConvertor";

const currencyList = ["USD", "EUR", "HNL"];

const Convertor = () => {
  const {
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
  } = useConvertor();


  return (
    <View>
      {/* Seleccionar moneda base */}
      <Text style={globalStyles.subTitle}>Selecciona tu moneda</Text>
      <View style={globalStyles.container}>
        <TouchableOpacity style={globalStyles.button} onPress={() => setModalFromVisible(true)}>
          <Text style={globalStyles.buttonText}> {selectedCurrencyFrom}</Text>
        </TouchableOpacity>
      </View>

      {/* Modal para seleccionar moneda base */}
      <Modal visible={modalFromVisible} transparent animationType="slide">
        <View style={globalStyles.modalContainer}>
          <View style={globalStyles.modalContent}>
            <Text style={globalStyles.modalTitle}>Selecciona una moneda</Text>
            <FlatList
              data={currencyList}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity style={globalStyles.currencyItem} onPress={() => handleSelectFrom(item)}>
                  <Text style={globalStyles.currencyText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity style={globalStyles.closeButton} onPress={() => setModalFromVisible(false)}>
              <Text style={globalStyles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>



      {/* Seleccionar moneda destino */}
      <Text style={globalStyles.subTitle}>Convertir a</Text>
      <View style={globalStyles.container}>
        <TouchableOpacity style={globalStyles.button} onPress={() => setModalToVisible(true)}>
          <Text style={globalStyles.buttonText}> {selectedCurrencyTo}</Text>
        </TouchableOpacity>
      </View>

      {/* Modal para seleccionar moneda destino */}
      <Modal visible={modalToVisible} transparent animationType="slide">
        <View style={globalStyles.modalContainer}>
          <View style={globalStyles.modalContent}>
            <Text style={globalStyles.modalTitle}>Selecciona una moneda</Text>
            <FlatList
              data={currencyList}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity style={globalStyles.currencyItem} onPress={() => handleSelectTo(item)}>
                  <Text style={globalStyles.currencyText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity style={globalStyles.closeButton} onPress={() => setModalToVisible(false)}>
              <Text style={globalStyles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Ingreso del monto */}
      <View>
           {/* Input para ingresar el monto */}
           <Text style = {globalStyles.subTitle}>Ingrese el monto</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Ingrese monto"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount} // Actualiza el estado
      />

        {/* Botón para convertir */}
        <TouchableOpacity style={globalStyles.buttonConvertor} onPress={handleConvert}>
        <Text style={globalStyles.buttonText}>Convertir</Text>
      </TouchableOpacity>
       
      </View>
      <View style = {globalStyles.containerResult} >
      <Text style = {globalStyles.result}>{`La total de la conversion de ${selectedCurrencyFrom} a ${selectedCurrencyTo} es de ${convertedAmount} `}</Text>
      </View>
    </View>
  );
};

export default Convertor;
