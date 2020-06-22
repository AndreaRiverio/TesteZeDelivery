
import React from 'react';
import { useHistory } from 'react-router-dom';
import PlacesAutocomplete, {
       geocodeByAddress,
       getLatLng
} from 'react-places-autocomplete';
import axios from 'axios';


import '../styles.css';

export default function Localiza(){
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({lat: null, lng: null});
  const history = useHistory();

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

    async function handlePesquisa() {
      let data = new Date();
      console.log(data);
        await axios({
          url: 'https://api.code-challenge.ze.delivery/public/graphql',
          method: 'post',
          data: {
            query: `
              query pocSearchMethod($now: DateTime!, $algorithm: String!, $lat: String!, $long: String!) {
                pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
                  id
                }
              }`,
              variables: { now: data, algorithm: "NEAREST", lat: coordinates.lat, long: coordinates.lng },
            }
            })
            .then(res => {
              const pocId = (res.data.data.pocSearch[0].id);
              localStorage.setItem('pocId', pocId);
              history.push('/Vitrine');
        });
      }

    return(
      <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
      {({ getInputProps, suggestions, getSuggestionItemProps, loading}) => (
          <>
              <div className='pesquisa'>
                  <input {...getInputProps({className:"endereco", placeholder:"Inserir endereço para ver o preço"})} />
                  <button className='enviar' onClick={handlePesquisa}></button>
              </div> 
              <div>
                  {loading && <div>Carregando...</div>}
                  {suggestions.map((suggestion) => {
                      const style = {
                          backgroundColor: suggestion.active ? '#fafafa' : '#ffffff'
                      };
                      return(
  
                      <div {...getSuggestionItemProps(suggestion, { style } )}>
                          {suggestion.description}
                      </div>
                  );                             
                  })}
              </div>
          </>
      )}
  </PlacesAutocomplete>
  );
}