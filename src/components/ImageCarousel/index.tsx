import React, { memo, useState } from 'react';
import { FlatList, Image, NativeScrollEvent, NativeSyntheticEvent, Dimensions, View, Pressable } from "react-native"
import { styles } from './styles';

const { width } = Dimensions.get("window")

interface ImageCarouselProps {
    images: string[];
}

export const ImageCarousel = memo(({ images }: ImageCarouselProps) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const renderItem = ({ item }: { item: string }) => <Image style={styles.image} source={{ uri: item }} />

    const handleScroolEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const horizontalOffset = e.nativeEvent.contentOffset.x;
        const index = Math.round(horizontalOffset / width);
        setActiveIndex(index)
    }

    return (
        <View>
            <FlatList
                pagingEnabled
                horizontal
                pinchGestureEnabled
                style={styles.list}
                data={images}
                onMomentumScrollEnd={handleScroolEnd}
                keyExtractor={(item, index) => String(index)} renderItem={renderItem}
            />
            <View style={styles.pagination}>
                {
                    images.map((_, index) => {
                        return <View
                            key={index}
                            style={[
                                styles.paginationStyle, index === activeIndex ? styles.activeLine : {}
                            ]}
                        />
                    })
                }
            </View>
        </View>
    )
})