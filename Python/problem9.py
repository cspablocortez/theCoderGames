given_sentence = "Good days give happiness, bad days give experience, worst days give lessons, and the best days give memories."

def exaggerate(sentence):
    replacements = {
        "good": "great",
        "bad": "terrible",
        "like": "love",
        "dislike": "hate"
    }

    all_words = sentence.split()
    for word in all_words:
        word = word.replace(",", "")
    return all_words

print(exaggerate(given_sentence))