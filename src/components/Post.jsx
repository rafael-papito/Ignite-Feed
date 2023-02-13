import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';
import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';


export function Post({ author, publishedAt, content }){
    const [comments, setComments] = useState([
        'Post muito bacana, heni?!'
    ])
    const [newCommentText, setNewCommentText] = useState('')
    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBR,
    })
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale: ptBR,
        addSuffix: true,
    })
    //CRIAR COMENTÁRIO
    function handleCreateNewComment(){
        event.preventDefault()
        
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }
    function handleNewCommentChange(){
        setNewCommentText(event.target.value)
    }
    /*function handleNewCommentInvalid(){
        event.target.setCustomValisity('Esse compo é obrigatório')
    }*/
    //DELETAR COMENTÁRIO
    function deleteComment(commentToDelete){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
        })
        setComments(commentsWithoutDeletedOne)
    }
    const isNewCommentEmpty = newCommentText.length == 0;
    return(
       <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if(line.type == 'paragraph'){
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type == 'link'){
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name="comment"
                    placeholder='Deixe seu comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    /*onInvalid={handleNewCommentInvalid}*/
                    required
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Comentar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return ( 
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
       </article>
    )
}
//{' '} usamos essa cambiarra para dar um espaçamento entre as ancorar de link