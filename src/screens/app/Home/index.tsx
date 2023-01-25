import { FlatList, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from "../../../components/Header";
import { styles } from "./style";
import { categories, ItemType } from "../../../data/categories";
import { CategoryBox } from "../../../components/CategoryBox";
import { products, ProductItemType } from "../../../data/products";
import { ProductItem } from "../../../components/ProductItem";
import { useDebounce } from "../../../hooks/useDebounce";

export const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState<number | undefined>();
    const [filteredProducts, setFilteredProducts] = useState(products)
    const [keyword, setKeyword] = useState<string>('')
    const { value } = useDebounce(keyword, 500)

    useEffect(() => {
        if (selectedCategory && !value) {
            const updatedProducts = products.filter((product) => product.category === selectedCategory);
            setFilteredProducts(updatedProducts)
        } else if (selectedCategory && value) {
            const updatedProducts = products.filter((product) => product.category === selectedCategory && product.title.toLowerCase().includes(value.toLowerCase()));
            setFilteredProducts(updatedProducts)
        } else if (!selectedCategory && value) {
            const updatedProducts = products.filter((product) => product.title.toLowerCase().includes(value.toLocaleLowerCase()));
            setFilteredProducts(updatedProducts)
        } else if (!selectedCategory && !value) {
            setFilteredProducts(products)
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
            <Header showSearch value={keyword} onSearch={setKeyword} title="Find All you need" />
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

