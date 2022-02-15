import React from 'react';
import {Box, Text} from "../../utils/theme";

export default function PainLocation() {
    return (
        <Box flexDirection='column'>
            <Box
                backgroundColor="primaryCardBackground"
                margin="s"
                padding="m"
                flexGrow={1}
            >
                <Text variant="body" color="primaryCardText">
                    Left side
                </Text>
            </Box>
            <Box
                backgroundColor="primaryCardBackground"
                margin="s"
                padding="m"
                flexGrow={1}
            >
                <Text variant="body" color="primaryCardText">
                    Right side
                </Text>
            </Box>
            <Box
                backgroundColor="primaryCardBackground"
                margin="s"
                padding="m"
                flexGrow={1}
            >
                <Text variant="body" color="primaryCardText">
                    Both sides
                </Text>
            </Box>
        </Box>
    );
}
