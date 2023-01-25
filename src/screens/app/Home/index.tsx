import { FlatList, ScrollView, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../../constants/screens";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from "../../../components/Header";
import { styles } from "./style";
import { categories, ItemType } from "../../../data/categories";
import { CategoryBox } from "../../../components/CategoryBox";
import { products, ProductItemType } from "../../../data/products";
import { ProductItem } from "../../../components/ProductItem";

export const Home = () => {
    const { navigate } = useNavigation()
    const [selectedCategory, setSelectedCategory] = useState<number | undefined>();
    const [filteredProducts, setFilteredProducts] = useState(products)
    const handlePress = () => navigate(SCREENS.SIGN_UP as never)
    const handleSigIn = () => navigate(SCREENS.SIGN_IN as never)

    useEffect(() => {
        if (selectedCategory) {
            const updatedProducts = products.filter((product) => product.category === selectedCategory);
            setFilteredProducts(updatedProducts)
        } else {
            setFilteredProducts(products)
        }
    }, [selectedCategory])

    const renderCategoryItem = ({ item, index }: { item: ItemType, index: number }) => {

        const onPress = () => {
            setSelectedCategory(item.id);

        }
        return (
            <CategoryBox isSelected={item.id === selectedCategory} isFirst={index === 0} {...item} onPress={onPress} />
        )
    }

    const renderProductItem = ({ item }: { item: ProductItemType }) => {

        const onPress = () => {
            console.log("pressed")
        }
        return (
            <ProductItem {...item} onPress={onPress} />
        )
    }

    return (
        <SafeAreaView>
            <Header showSearch title="Find All you need" />
            <FlatList showsHorizontalScrollIndicator={false} horizontal style={styles.list} nestedScrollEnabled data={categories} renderItem={renderCategoryItem} keyExtractor={(_item, index) => String(index)} />
            <FlatList
                style={styles.productList}
                numColumns={2}
                data={filteredProducts}
                renderItem={renderProductItem}
                keyExtractor={(item) => String(item.id)}
                ListFooterComponent={<View style={{ height: 150 }} />}
            />
        </SafeAreaView>
    )
}

