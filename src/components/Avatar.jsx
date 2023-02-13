import styles from './Avatar.module.css';


export function Avatar({ hasBorder = true, src }){
    return(
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src}
        />
    )
}
// vamos usar desestruturação para poder colocar as vordas nos avatares e não nos comentarios.