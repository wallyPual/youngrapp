import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation';

const PhotoActions = props => (
    <View style={styles.container}>
        <View style={styles.actions}>
            <TouchableOpacity onPressOut={ () => props.handlePress(props.isLiked)}>
                <View style={styles.action}>
                    <Ionicons name={ props.isLiked ? "ios-heart" : "ios-heart-empty" } size={30} color={ props.isLiked ? "#eb4b59" : "black" } />
                </View>
            </TouchableOpacity>
            { props.comments.length > 0 ? (
                <TouchableOpacity onPressOut={ () =>
                    props.navigation.navigate("Comments", {
                        userInfo: {
                            creator: props.creator,
                            message: props.caption
                        },
                        comments: props.comments
                    })
                }>
                    <View style={styles.action}>
                        <Ionicons name="ios-text" size={30} color="black" />
                    </View>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity>
                    <View style={styles.action}>
                        <Ionicons name="ios-text" size={30} color="black" />
                    </View>
                </TouchableOpacity>
            ) }
        </View>
        <TouchableOpacity onPressOut={ () => props.navigation.navigate("Likes", { photoId: props.photoId }) }>
            <View>
                <Text style={styles.likes}>{ props.likeCount } { props.likeCount === 1 ? "like": "likes" }</Text>
            </View>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 5
    },
    actions: {
        flexDirection: "row"
    },
    action: {
        marginRight: 10
    },
    likes: {
        fontWeight: "600",
        fontSize: 14
    }
})

PhotoActions.propTypes = {
    isLiked: PropTypes.bool.isRequired,
    likeCount: PropTypes.number.isRequired,
    handlePress: PropTypes.func.isRequired
}

export default withNavigation(PhotoActions);