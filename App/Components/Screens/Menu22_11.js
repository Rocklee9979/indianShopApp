import React, {useState,useEffect} from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    LayoutAnimation,
} from 'react-native';
//Menu Content
const CONTENT = [
    {
        isExpanded: false,
        main_title: 'Account',
        sub_title: [
            {id: 1, sub_name: 'DashBoard'},
            {id: 2, sub_name: 'Edit Profile'},
            {id: 3, sub_name: 'List'},
            {id: 4, sub_name: 'Wish List'},
            {id: 5, sub_name: 'Change Password'}
        ]
    },
    {
        isExpanded: false,
        main_title: 'Products',
        sub_title: [
            {id: 6, sub_name: 'Vegetables'},
            {id: 7, sub_name: 'Spices'},
            {id: 8, sub_name: 'Rices'},
            {id: 9, sub_name: 'Fruits'},
        ]
    },
    {
        isExpanded: false,
        main_title: 'Products',
        sub_title: [
            {id: 6, sub_name: 'Vegetables'},
            {id: 7, sub_name: 'Spices'},
            {id: 8, sub_name: 'Rices'},
            {id: 9, sub_name: 'Fruits'},
        ]
    },
    {
        isExpanded: false,
        main_title: 'Subscription',
        sub_title: [
            
        ]
    },
    {
        isExpanded: false,
        main_title: 'Settings',
        sub_title: [
            
        ]
    },
    {
        isExpanded: false,
        main_title: 'Sign Out',
        sub_title: [
            
        ]
    },
];
const ExpandableComponent = ({item,onClickFunction}) =>{
    cont [layoutHeight,setlayoutHeight] = useState(0);
    useEffect(()=>{
        if(item.isExpanded){
            setlayoutHeight(null);
        }else{
            setlayoutHeight(0);
        }
    },[item.isExpanded]);
    return(
        <View>
            <TouchableOpacity style = {styles.MenuItem} onPress = {onClickFunction}>
                <Text style = {styles.MenuItemText}>{item.main_title}</Text>
            </TouchableOpacity>
            <View style ={{
                height: layoutHeight,
                overflow: 'hidden'
            }}>
                {
                    item.sub_title.map((item,key)=>(
                        <TouchableOpacity key = {key} style = {styles.Content}>
                            <Text style = {styles.subText}> {key}.{item.val}</Text>
                        <View style = {styles.seperator}/>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}
export default function Menu() {
    const [multiSelect,setmultiSelect] = useState(false);
    const[listDataSource,setlistDataSource] = useState(CONTENT);
    const updateLayout = ()=>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];
        if(multiSelect){
            // if multiple select is enabled
            array[index]['isExpanded'] = !array[index]['isExpanded'];
        }
        else{
            // if single select is enabled
            array.map((value,placeindex) =>
                placeindex === index
                ? (array[placeindex]['isExpanded']) = !array[placeindex]['isExpanded']
                : (array[placeindex]['isExpanded']) = false
            )
        }
    }
    return (
    <SafeAreaView style = {{flex:1}}>
        <View style = {styles.container}>
            <View style = {styles.header}></View>
            <Text style = {styles.titleText}>Menu</Text>
            <TouchableOpacity onPress = {()=>setmultiSelect(!multiSelect)}>
                <Text style = {styles.headerButton}>
                    {
                        multiSelect
                        ? 'Enable /n Expand'
                        : 'Enable Multiple /n Expand'
                    }
                </Text>
            </TouchableOpacity>
        </View>
        <ScrollView>
                {
                    listDataSource.map((item,key) =>{
                        <ExpandableComponent 
                        key = {item.main_title}
                        item = {item}
                        onClickFunction = {()=>{
                        updateLayout(kay)
                        }}
                        />
                    })
                }
        </ScrollView>
    </SafeAreaView>
)
}

const styles = StyleSheet.create ({
container: {
   marginTop: StatusBar.currentHeight,
   paddingHorizontal: 15,
   backgroundColor: '#f9db04',
   flex: 1,
},
header:{
    flexDirection: 'row',
    padding: 10,

},
titleText:{
    
    fontSize: 22,
    fontWeight:'bold',
},
headerButton:{
    textAlign: 'center',
    justifyContent:'center',
    fontSize: 18,

},
MenuItem:
{
    backgroundColor: '#f9db04',
    padding: 20,
},
MenuItemText:{
    fontSize: 18,
    fontWeight: 300,
},
Content:{
    paddingLeft:10,
    paddingRight: 10,
},
subText:{
    fontSize:16,
    padding:10,
},
seperator:{
    height: 0.5,
    width:'100%',
}

})
