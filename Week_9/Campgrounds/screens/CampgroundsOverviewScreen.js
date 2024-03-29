import { useLayoutEffect } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { CAMPGROUNDS, STATES } from "../data/dummy-data";
import CampgroundItem from "../components/CampgroundItem";

// Function to show the CampgroundsOverviewScreen
function CampgroundsOverviewScreen(props) {
    const stateId = props.route.params.stateId;

    useLayoutEffect(() => {
        const state = STATES.find((state) => state.id === stateId);
        props.navigation.setOptions({title: state ? state.name : null})
    }, [stateId, props.navigation])


    const displayedCampgrounds = CAMPGROUNDS.filter((campgroundItem) =>{
        return campgroundItem.stateId === stateId;
    })

    function renderCampgroundItem(itemData){
        const campgroundItemProps = {
            name: itemData.item.name,
            imageUrl: itemData.item.imageUrl,
            numSites: itemData.item.numSites,
            foundedYear: itemData.item.foundedYear,
            rating: itemData.item.rating,
            listIndex: itemData.index
        }
        return <CampgroundItem {...campgroundItemProps}/>
    }

  return (
    <View style={styles.container}>
        <FlatList
            data={displayedCampgrounds}
            keyExtractor={(item) => item.id}
            renderItem={renderCampgroundItem}
        />
    </View>
  );
}

// Export to different files
export default CampgroundsOverviewScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 16,
    }
});
