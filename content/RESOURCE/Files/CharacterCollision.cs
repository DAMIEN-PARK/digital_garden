using UnityEngine;

public class CharacterCollision : MonoBehaviour
{
    // Start is called once before the first execution of Update after the MonoBehaviour is created
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void OnControllerColliderHit(ControllerColliderHit hit)
    {
       // Debug.Log("부딪힌 객체: " + hit.gameObject.name);
       Debug.Log("부딪힌 객체: " + hit.gameObject.tag);
    }
}
