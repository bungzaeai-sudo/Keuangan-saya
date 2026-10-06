import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const icons = { index:'home-outline', debts:'card-outline', receivables:'people-outline', savings:'wallet-outline', transactions:'receipt-outline' };
export default function TabsLayout(){
 return <Tabs screenOptions={{ headerShown:false, tabBarActiveTintColor:'#155EEF', tabBarInactiveTintColor:'#98A2B3', tabBarStyle:{height:72,paddingTop:8,paddingBottom:10,borderTopColor:'#EAECF0',backgroundColor:'#fff'}, tabBarLabelStyle:{fontSize:11,fontWeight:'600'} }}>
  <Tabs.Screen name="index" options={{title:'Beranda',tabBarIcon:({color,size})=><Ionicons name={icons.index} color={color} size={size}/>}}/>
  <Tabs.Screen name="debts" options={{title:'Utang',tabBarIcon:({color,size})=><Ionicons name={icons.debts} color={color} size={size}/>}}/>
  <Tabs.Screen name="receivables" options={{title:'Piutang',tabBarIcon:({color,size})=><Ionicons name={icons.receivables} color={color} size={size}/>}}/>
  <Tabs.Screen name="savings" options={{title:'Tabungan',tabBarIcon:({color,size})=><Ionicons name={icons.savings} color={color} size={size}/>}}/>
  <Tabs.Screen name="transactions" options={{title:'Riwayat',tabBarIcon:({color,size})=><Ionicons name={icons.transactions} color={color} size={size}/>}}/>
 </Tabs>;
}
