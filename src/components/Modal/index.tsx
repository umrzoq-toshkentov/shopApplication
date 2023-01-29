import React from "react";
import { Modal as ModalComponent, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export interface ModalProps {
    open: boolean;
    handleModal: () => void;
    children: React.ReactElement;
}


export const Modal: React.FC<ModalProps> = ({ open, handleModal, children }) => {


    return (
        <ModalComponent transparent visible={open}>
            <TouchableOpacity activeOpacity={1} style={styles.modalWrapper} onPress={handleModal}>
                <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
                    {children}
                </TouchableOpacity>
            </TouchableOpacity>
        </ModalComponent>
    )
}