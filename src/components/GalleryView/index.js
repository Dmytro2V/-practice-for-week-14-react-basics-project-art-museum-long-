import { useParams, Routes, Route } from 'react-router-dom';
import ArtImageTile from '../ArtImageTile'


function GalleryView({ galleries }) {
    console.log(galleries);
    const { galleryId } = useParams();
    console.log('galId', galleryId);
    //console.log('gid', galleryId);
    const gallery=galleries.find(gal => gal.gallerynumber === galleryId)
    //const ArtImageTiles = [0]
    //console.log('ArtImageTiles0',ArtImageTiles0 );
console.log('str', String.fromCharCode(89,111,117,32,115,104,111,117,108,100,32,108,111,111,112,32,116,104,114,111, 117,103,104,32,96,103,97,108,108,101,114,121,46,111,98,106,101,99,116,115,96, 46,32,58,41));
   
    return (
        <div>
            <h2>Gallery: {gallery.name}</h2>
            <Routes>
                <Route path="/l" element=                    
                    {gallery.objects.map(obj => {
                        return (          
                            <ArtImageTile art={obj}/>
                        )
                    })
        }  
                />

                <Route path="/art/:artId" element = 'art artId el'/> 
            </Routes>            
                
             
        </div>
    )

}
export default GalleryView;