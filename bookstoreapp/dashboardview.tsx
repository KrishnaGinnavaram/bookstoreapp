import React, { useEffect, useState } from 'react';
import {SafeAreaView,StyleSheet,View,Text} from 'react-native';
import { FlatList } from 'react-native';
import DashboardListitem from './DashboardListitem';
import {Menu, Divider, Provider } from 'react-native-paper';
import { Button } from 'react-native-elements';
import ButtonComponent from '../components/ButtonComponent';
function DashboardView(props) {

    const [data,setData] = useState([]);
    const [asc,setAsc] = useState(0);
    const [selectedValue, setSelectedValue] = useState('');
    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

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
    }

    const sortByName = () => {
            setData(data.sort((a, b) => {
            return a.name.localeCompare(b.name);
        }));
        setAsc(asc+1);
    }

    const sortByPrice = () => {
        setData(data.sort((a,b) => {
            return parseInt(a.price) - parseInt(b.price);
        }));
        setAsc(asc+1);
    }

    const sortByDownloads = () => {
        setData(data.sort((a,b) => {
            return parseInt(a.downloads) - parseInt(b.downloads);
        }));
        setAsc(asc+1);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
            <Text style={styles.headerLabel}>List of Books</Text>
            </View>
            <Provider>
              <View
                style={{
                      marginBottom: 10,
                      marginTop: 20,
                      marginLeft: 10,
                      height: 50,
                     }}>
            <Menu
             visible={visible}
             onDismiss={closeMenu}
              anchor={
              <View>
                <ButtonComponent
                title="Sort by"
                icon={{
                    name: 'chevron-thin-down',
                    type: 'entypo',
                    size: 15,
                    color: 'white',
                  }}
                buttonStyle={{
                  backgroundColor: 'rgba(78, 116, 289, 1)',
                  borderColor: 'rgba(78, 116, 289, 1)',
                  borderRadius: 5
                }}
                type="outline"
                titleStyle={{fontSize: 15,color: 'white'}}
                containerStyle={{
                  width: 100,
                  marginLeft: 10,
                  height: 40
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
            <FlatList
             style={{marginTop: 50,zIndex: -10}}
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