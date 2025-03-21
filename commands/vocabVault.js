const startVocabVault = async (interaction, client) => {
    await interaction.reply('Starting vocab vault...')
}

const stopVocabVault = async (interaction, client) => {
    await interaction.reply('Stopping vocab vault...')
}

module.exports = {
    startVocabVault,
    stopVocabVault
}