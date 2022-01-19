import React, { useEffect, useRef, useState } from 'react';
import {SafeAreaView,StyleSheet,View,Text} from 'react-native';
import { FlatList } from 'react-native';
import DashboardListitem from './DashboardListitem';
import {Menu, Divider, Provider} from 'react-native-paper';
import SearchBarComponent from '../components/SearchBarComponent';
import ButtonComponent from '../components/ButtonComponent';
function DashboardView(props) {
    const [data,setData] = useState([]);
    const [flatlistDetails,setFlatListDetails] = useState([]);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [visible, setVisible] = React.useState(false);
    const [filterVisible, setFilterVisible] = React.useState(false);

    const openMenu = (e: any) => {
      setVisible(true);
    }

    const openFilterMenu = (e: any) => {
      setFilterVisible(true);
    }

    const closeMenu = () => {
      setVisible(false);
    }

    const closeFilterMenu = () => {
      setFilterVisible(false);
    }

    useEffect(() => {
        loadBookDetails();
    },[]);

    // useEffect(() => {
    //     console.log(data)
    // },[data])

    const loadBookDetails = async () => {
           const response = await fetch('https://61dddb4af60e8f0017668ac5.mockapi.io/api/v1/Book');
           const details = await response.json();
           setData(details);
           setFlatListDetails(details);
    }

    const sortByName = ()  => {
            setData(data.sort((a, b) => {
            return a.name.localeCompare(b.name);
        }));
        setVisible(false);
    }

    const sortByPrice = () => {
        setData(data.sort((a,b) => {
            return parseInt(a.price) - parseInt(b.price);
        }));
        setVisible(false);
    }

    const sortByDownloads = () => {
        setData(data.sort((a,b) => {
            return parseInt(a.downloads) - parseInt(b.downloads);
        }));
        setVisible(false);
    }

    const lowCost =  () => {
       setData(flatlistDetails.filter(item => {return item.price <= 100}))
      setFilterVisible(false);
  }

  const mediumCost = () => {
    setData(flatlistDetails.filter(item => {return item.price > 100 && item.price <= 500}))
    setFilterVisible(false);
}

  const highCost = () => {
    setData(flatlistDetails.filter(item => {return item.price > 500}))
     setFilterVisible(false);
    }

    const onChangeSearch =(e : any) => {
      let text = e.toLowerCase();
      setSearchQuery(text);
      if(text.length !== 0) {
        setData(data.filter((item) => {
          return item.name.toLowerCase().match(text)
        }))
      }
      else if(text.length === 0) {
        setData(flatlistDetails);
      }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
            <Text style={styles.headerLabel}>List of Books</Text>
            </View>
            <SearchBarComponent
            style={{width: 370,height: 50,marginLeft: 20,marginTop: 10}}
             placeholder="Search by Bookname"
             onChangeText={onChangeSearch}
             value={searchQuery}
             />
            <FlatList
             style={{marginTop: 0,zIndex: -10}}
             data={data}
             keyExtractor={item => item.id }
             renderItem={({item}) =>
            <DashboardListitem
              bookname={item.name}
              author={item.author}
              price={item.price}
              downloads={item.downloads}
             />
            }
            />
            <View style={{display: "flex",flexDirection: "row"}}>
              <Provider>
              <View>
            <Menu
             visible={visible}
             onDismiss={closeMenu}
             style={{marginTop: -620}}
              anchor={
              <View>
                <ButtonComponent
                title="Sort by"
                icon={{}}
                buttonStyle={{
                  backgroundColor: 'rgba(78, 116, 289, 1)',
                  borderColor: 'rgba(78, 116, 289, 1)',
                  borderRadius: 5
                }}
                type="outline"
                titleStyle={{fontSize: 15,color: 'white'}}
                containerStyle={{
                  marginRight: 0.5
                }}
                onPress={openMenu}
                />
              </View>
              }>
               <Menu.Item onPress={sortByPrice} title="Price" />
               <Divider />
               <Menu.Item onPress={sortByDownloads} title="No.of Downloads" />
               <Divider />
               <Menu.Item onPress={sortByName} title="Book Name" />
            </Menu>
           </View>
           </Provider>

           <Provider>
           <View
                style={{
                      height: 50,
                     }}>
            <Menu
             visible={filterVisible}
             onDismiss={closeFilterMenu}
             style={{marginTop: -620}}
              anchor={
              <View>
                <ButtonComponent
                title="Filter by"
                icon={{}}
                buttonStyle={{
                  backgroundColor: 'rgba(78, 116, 289, 1)',
                  borderColor: 'rgba(78, 116, 289, 1)',
                  borderRadius: 5
                }}
                type="outline"
                titleStyle={{fontSize: 15,color: 'white'}}
                containerStyle={{
                }}
                onPress={openFilterMenu}
                />
              </View>
              }>
               <Menu.Item onPress={lowCost} title=" Price <= $100" />
               <Divider />
               <Menu.Item onPress={mediumCost} title=" Price > $100 and <= $500" />
               <Divider />
               <Menu.Item onPress={highCost} title=" Price > $500" />
            </Menu>
           </View>
           </Provider>
           </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerLabel: {
        fontSize: 20,
        width: "100%",
        backgroundColor: "lightblue",
        borderWidth: 1,
        textAlign: "center",
        height: 50,
        paddingTop: 10
      }
})
export default DashboardView;