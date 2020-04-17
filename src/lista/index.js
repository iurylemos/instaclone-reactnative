import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class Lista extends Component {

  constructor(props) {
    super(props);

    this.state = {
      feed: this.props.data
    }
  }

  render = () => {

    const { feed } = this.state

    return (
      <View style={styles.areaFeed}>
        <View style={styles.viewPerfil}>
          <Image source={{ uri: feed.imgperfil }} style={styles.fotoPerfil} />
          <Text style={styles.nomeUsuario}>{feed.nome}</Text>
        </View>

        <Image
          resizeMode='cover'
          source={{ uri: feed.imgPublicacao }}
          style={styles.fotoPublicacao} />
        <View style={styles.areaBtn}>
          <TouchableOpacity>
            <Image source={require('../assets/img/like.png')} style={styles.iconeLike} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSend}>
            <Image source={require('../assets/img/send.png')} style={styles.iconeLike} />
          </TouchableOpacity>
        </View>
        <View style={styles.viewRodape}>
          <Text style={styles.nomeRodape}>
            {feed.nome}
          </Text>
          <Text style={styles.descRodape}>
            {feed.descricao}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  areaFeed: {

  },
  nomeUsuario: {
    fontSize: 22,
    textAlign: 'left',
    color: '#000'
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  fotoPublicacao: {
    flex: 1,
    height: 400,
    alignItems: 'center'
  },
  viewPerfil: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8
  },
  areaBtn: {
    flexDirection: 'row',
    padding: 5
  },
  btnSend: {
    paddingLeft: 5
  },
  iconeLike: {
    width: 33,
    height: 33
  },
  viewRodape: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descRodape: {
    paddingLeft: 5,
    fontSize: 15,
    color: '#000'
  },
  nomeRodape: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 5
  }

})

export default Lista