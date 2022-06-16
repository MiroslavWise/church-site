export const Play = ({link, title, description}) => {

        return(
                <>      
                <div className="youtube_playlist">
                        <iframe 
                                width="600" 
                                style={{aspectRatio:  1.85}} 
                                src={link}
                                title={title} 
                                frameborder="0" 
                                allow="accelerometer; autoplay; encrypted-media;  picture-in-picture" 
                                allowfullscreen
                        ></iframe>
                        <div className="you_descr">
                                {description}
                        </div>
                </div>
                        
                </>
        )
}