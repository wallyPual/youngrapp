import React from 'react';
import LikesScreen from '../screens/LikesScreen';
import CommentsScreen from '../screens/CommentsScreen';
import ProfileDetailScreen from '../screens/ProfileDetailScreen'
import PhotoScreen from '../screens/PhotoScreen'
import NavButton from '../components/NavButton';

const sharedRoutes = {
    Likes: {
        screen: LikesScreen,
        navigationOptions: {
            headerTitle: "Likes"
        }
    },
    Comments: {
        screen: CommentsScreen,
        navigationOptions: {
            headerTitle: "Comments"
        }
    },
    ProfileDetail: {
        screen: ProfileDetailScreen
    },
    Photo: {
        screen: PhotoScreen,
        navigationOptions: {
            headerTitle: 'Photo'
        }
    }
}

const sharedOptions = {
    navigationOptions: {
        headerLeft: props => <NavButton iconFamily="Ionicons" iconName={"ios-arrow-back"} {...props} />,
        headerStyle: {
            backgroundColor: '#fbfbfb'
        }
    }
}

export { sharedOptions };

export default sharedRoutes;