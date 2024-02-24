given_sentence = "Good days give happiness, bad days give experience, worst days give lessons, and the best days give memories."

def exaggerate(sentence):
    replacements = {
        "good": "great",
        "bad": "terrible",
        "like": "love",
        "dislike": "hate"
    }

    for key, value in replacements.items():
        sentence = sentence.replace(key, value)

    return sentence

print(exaggerate(given_sentence))