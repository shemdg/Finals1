import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput, Alert, useWindowDimensions, FlatList  } from 'react-native';

import { Card } from 'react-native-paper';

import AssetExample from './components/AssetExample';

const images = [
  { id: '1', image: require('./assets/pexel1.jpg') },
  { id: '2', image: require('./assets/pexel2.jpg') },
  { id: '3', image: require('./assets/pexel3.jpg') },
  { id: '4', image: require('./assets/pexel4.jpg') },
  { id: '5', image: require('./assets/pexel5.jpg') },
];

const prod = [
  { id: '1', image: require('./assets/jordan1.jpg') },
  { id: '2', image: require('./assets/jordan2.jpg') },
  { id: '3', image: require('./assets/jordan3.jpg') },
  { id: '4', image: require('./assets/jordan4.jpg') },
  { id: '5', image: require('./assets/jordan5.jpg') },
];

const test = [
  { id: '1', image: require('./assets/testimonial1.jpg'), name: 'Anonymous' },
  { id: '2', image: require('./assets/testimonial2.jpg'), name: 'Anonymous' },
  { id: '3', image: require('./assets/testimonial3.jpg'), name: 'Anonymous' },
  { id: '4', image: require('./assets/testimonial4.jpg'), name: 'Anonymous' },
  { id: '5', image: require('./assets/testimonial5.jpg'), name: 'Anonymous' },
];

export default function App() {
  const [appointDate, setAppointDate] = useState("");
  const [appointTime, setAppointTime] = useState("");

  const onAppoint = () => {
      Alert.alert("Congratulations!", "You have set an appointment", [{ text: 'OK' }]);
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = useWindowDimensions(); // kinukuha yung dimension ng screen

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  return (
    <ScrollView style={{backgroundColor: '#1c1c1c'}}>
      <View style={{position: 'absolute'}}>
        <Image source={require('./assets/1420394432.jpg')} style={styles.cover}/>
      </View>
      <View style = {{flexDirection: 'row'}}>
        <Image source={require('./assets/2x2.png')} style={styles.profile}/>
        <View styles = {{flexDirection: 'row'}}>
          <Text style = {styles.header}>Shem de Guzman</Text>
          <Text style = {styles.paragraph}>Bachelor of Science in Information Technology</Text>
        </View>
      </View>
      <View style = {{flexDirection: 'row'}}> 
          <Image source={require('./assets/fb.png')} style={styles.image}/>
          <Image source={require('./assets/insta.png')} style={styles.image2}/>
          <Image source={require('./assets/X.png')} style={styles.image2}/>
      </View>
      <Text style = {styles.paragraph2}>Shem de Guzman is currently enrolled as a first-year student at Global Reciprocal Colleges and he specializes in Bachelor of Science in Information Technology. Like many other young-adult students, he's required to arrange and meet specific criteria so he can qualify to pursue his chosen computer programming career.</Text>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.container}>
            <View style={{flexDirection:'row'}}>
              <Image source={require('./assets/mail.png')} style={styles.image3}/>
              <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 15, marginLeft: 5}}>Email Address</Text>
            </View>
          <Text style={styles.paragraph3}>shemrdg@gmail.com</Text>
        </View>
        <View style={styles.container}>
          <View style = {{flexDirection: 'row'}}>
            <Image source = {require('./assets/phone.png')} style={styles.image3}/>
            <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 15, marginLeft: 5}}>Mobile Number</Text>
          </View>
          <Text style={styles.paragraph3}>+639918864694</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 15}}>
        <View style={styles.container}>
          <View style = {{flexDirection: 'row'}}>
            <Image source={require('./assets/cake.png')} style={styles.image3}/>
            <Text style={{fontSize: 15, fontWeight: 'bold', marginTop: 15, marginLeft: 10}}>Date of Birth</Text>
          </View>
          <Text style={styles.paragraph3}>February 30, 1969</Text>
        </View>
        <View style={styles.container}>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('./assets/gps.png')} style={styles.image3}/>
            <Text style = {{fontSize: 15, fontWeight: 'bold', marginTop: 15, marginLeft: 15}}>Location</Text>
          </View>
          <Text style={styles.paragraph3}>Metro Manila, Philippines</Text>
        </View>
      </View>
      <View style={styles.center}>
        <View style={styles.container2}>
          <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'white', paddingTop: 15}}>Make an Appointment</Text>
        </View>
      </View>
      <View style={styles.center}>
        <View style={styles.container3}> 
          <TextInput
            value={appointDate}
            placeholder="   Enter a Date"
            onChangeText={setAppointDate}
            style = {styles.input}
            placeholderTextColor="gray"
          />
          <TextInput
            value={appointTime}
            placeholder="   Enter a Time"
            onChangeText={setAppointTime}
            style = {styles.input}
            placeholderTextColor="gray"
          />
          <View style={styles.center}>
            <TouchableOpacity onPress={onAppoint} style={styles.button}>
              <Text style={{textAlign: 'center', fontWeight: 'bold', paddingTop: 5}}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.center}>
        <View style={styles.container2}>
          <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'white', paddingTop: 15}}>Our Services</Text>
        </View>
      </View>
      <Text style={styles.header2}>Graphic Design</Text>
      <Text style={styles.paragraph4}>In the realm of graphic design, I delve deep into the art of visual storytelling. With a profound understanding of design principles and a creative mindset, I craft immersive experiences that captivate audiences and evoke emotions.
      
       My journey begins with understanding the essence of each project, unraveling its unique narrative, and translating it into compelling visual language. Through meticulous attention to detail and innovative thinking, I bring ideas to life, seamlessly blending form and function to deliver designs that resonate.</Text>
      <Text style={styles.header2}>Programmer</Text>
      <Text style={styles.paragraph4}>In the realm of programming, wielding code as my medium of creation. With a keen intellect and a relentless drive for innovation, I embark on a journey of problem-solving, unraveling complexities and architecting elegant solutions.

My expertise spans across a multitude of programming languages and paradigms, allowing me to adapt to any challenge that comes my way. From crafting robust backend systems to developing intuitive user interfaces, I thrive on pushing the boundaries of technology to deliver seamless experiences.

At the heart of my craft lies a passion for efficiency and optimization. I meticulously fine-tune algorithms, optimize performance, and refactor code to ensure that every line serves a purpose and every function operates at peak efficiency.</Text>
      <View style={styles.center}>
        <View style={styles.container2}>
          <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'white', paddingTop: 15}}>Gallery</Text>
        </View>
      </View>
     <View style={{marginTop: 15}}>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <Image source={item.image} style={{ width, height: 240 }} />
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScrollToIndexFailed={info => {
          console.log("Scroll to index failed:", info);
        }}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        keyExtractor={item => item.id}
        
      />
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === activeIndex ? styles.activeDot : null]}
          />
        ))}
      </View>
    </View>
    <View style={styles.center}>
        <View style={styles.container2}>
          <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'white', paddingTop: 15}}>Products</Text>
        </View>
      </View>
      <View style={{marginTop: 15}}>
      <FlatList
        data={prod}
        renderItem={({ item }) => (
            <View style = {styles.container4}>
              <Text style = {{marginTop: 15, marginLeft: 15, fontSize: 20, fontWeight: 'bold'}}>Shoes</Text>
              <View style = {styles.center}>
                <Image source={item.image} style={{ width: 310, height: 170, borderRadius: 15 }} />
              </View>
              <Text style = {{marginTop: 15, marginLeft: 15, marginBottom: 15, fontSize: 20,}}>Air Jordan Shoes Price ₱1,200</Text>
            </View>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScrollToIndexFailed={info => {
          console.log("Scroll to index failed:", info);
        }}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        keyExtractor={item => item.id}
        
      />
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === activeIndex ? styles.activeDot : null]}
          />
        ))}
      </View>
    </View>
    <View style={styles.center}>
        <View style={styles.container2}>
          <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'white', paddingTop: 15}}>Testimonial</Text>
        </View>
      </View>
      <View style={{marginTop: 15}}>
      <FlatList
        data={test}
        renderItem={({ item }) => (
            <View style = {styles.container4}>
              <Text style = {{marginTop: 15, marginLeft: 15, fontSize: 20, fontWeight: 'bold'}}>{item.name}</Text>
              <View style = {styles.center}>
                <Image source={item.image} style={{ width: 200, height: 200, borderRadius: 101, borderColor: '#1560BD', borderWidth: 5 }} />
              </View>
              <Text style = {{marginTop: 15, marginLeft: 15, marginBottom: 15, fontSize: 20,}}>Wonderful i will avail again of your service!</Text>
            </View>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScrollToIndexFailed={info => {
          console.log("Scroll to index failed:", info);
        }}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        keyExtractor={item => item.id}
        
      />
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === activeIndex ? styles.activeDot : null]}
          />
        ))}
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  cover: {
    height: 200,
    width: 400,
  },

  profile: {
    height: 150,
    width: 150,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#1560BD',
    marginLeft: 15,
    marginTop: 110
  },

  header: {
    marginTop: 200,
    marginLeft: 7,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17
  },

  paragraph: {
    marginTop: 5,
    marginLeft: 7,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 8.5
  },

  image: {
    height: 50,
    width: 50,
    marginLeft: 170
  },

  image2: {
    height: 50,
    width: 50,
    marginLeft: 15,
  },

  paragraph2: {
    textAlign: 'justify',
    fontSize: 15,
    color: 'white',
    padding: 15,
  },

  container: {
    height: 100,
    width: 175,
    marginLeft: 15,
    backgroundColor: '#1560BD',
    borderRadius: 15,
  },

  image3: {
    height: 50,
    width: 50,
  },

  paragraph3: {
    fontSize: 11.5,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginTop: 5
  },

  container2: {
    height: 50,
    width: 200,
    backgroundColor: '#1560BD',
    borderRadius: 10,
    marginTop: 15,
  },

  container3: {
    height: 250,
    width: 330,
    backgroundColor: '#1560BD',
    marginTop: 15,
    borderRadius: 10
  },

  input: {
    height: 50,
    width: 265,
    backgroundColor: 'white',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30
  },

  button: {
    height: 30,
    width: 100,
    backgroundColor: 'white',
    borderRadius: 10
  },

  header2: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1560BD',
    marginTop: 15
  },

  paragraph4: {
    textAlign:'justify',
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 15,
    color: 'white',
    marginTop: 15
  },

  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    margin: 8,
  },
  activeDot: {
    backgroundColor: 'black',
  },

  container4: {
    height: 330,
    width: 360,
    backgroundColor: 'white',
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10
  },
  
});