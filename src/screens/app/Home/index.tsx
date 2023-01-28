import { ActivityIndicator, FlatList, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from "../../../components/Header";
import { styles } from "./style";
import { categories, ItemType } from "../../../data/categories";
import { CategoryBox } from "../../../components/CategoryBox";
import { products } from "../../../data/products";
import { ProductItem } from "../../../components/ProductItem";
import { useDebounce } from "../../../hooks/useDebounce";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../../constants/screens";
import { useQuery } from "@tanstack/react-query";
import { getServices } from "../../../api";
import { Service } from "../../../dto";

export const Home = () => {
    const { navigate } = useNavigation()
    const [selectedCategory, setSelectedCategory] = useState<number | undefined>();
    const [filteredProducts, setFilteredProducts] = useState<Service[]>()
    const [keyword, setKeyword] = useState<string>('')
    const { value } = useDebounce(keyword, 500)

    const { isLoading, data } = useQuery<Service[]>(["services"], () => getServices(), {
        onSuccess: (data) => {
            const filteredData = data.filter(item => !!item.image)
            setFilteredProducts(filteredData)
        }
    });
    const filteredData = data?.filter(item => !!item.image) || []

    useEffect(() => {

        if (selectedCategory && !value) {
            const updatedProducts = filteredData.filter((product) => Number(product?.category) === selectedCategory);
            setFilteredProducts(updatedProducts)
        } else if (selectedCategory && value) {
            const updatedProducts = filteredData.filter((product) => Number(product?.category) === selectedCategory && product.title.toLowerCase().includes(value.toLowerCase()));
            setFilteredProducts(updatedProducts)
        } else if (!selectedCategory && value) {
            const updatedProducts = filteredData.filter((product) => product.title.toLowerCase().includes(value.toLocaleLowerCase()));
            setFilteredProducts(updatedProducts)
        } else if (!selectedCategory && !value) {
            setFilteredProducts(filteredData)
        }
    }, [selectedCategory, value])

    const renderCategoryItem = ({ item, index }: { item: ItemType, index: number }) => {

        const onPress = () => {
            setSelectedCategory(item.id);
        }
        return (
            <CategoryBox isSelected={item.id === selectedCategory} isFirst={index === 0} {...item} onPress={onPress} />
        )
    }

    const renderProductItem = ({ item }: { item: Service }) => {
        const onPress = () => {
            navigate(SCREENS.PRODUCT_DETAILS as never, { item } as never)
        }

        return (
            <ProductItem {...item} onPress={onPress} />
        )
    }

    if (isLoading) {
        return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator />
        </View>
    }

    return (
        <SafeAreaView>
            <Header showSearch value={keyword} onSearch={setKeyword} title="Find All you need" />
            <FlatList showsHorizontalScrollIndicator={false} horizontal style={styles.list} nestedScrollEnabled data={categories} renderItem={renderCategoryItem} keyExtractor={(_item, index) => String(index)} />
            <FlatList
                style={styles.productList}
                numColumns={2}
                data={filteredProducts}
                renderItem={renderProductItem}
                keyExtractor={(item) => String(item._id)}
                ListFooterComponent={<View style={{ height: 150 }} />}
            />
        </SafeAreaView>
    )
}

